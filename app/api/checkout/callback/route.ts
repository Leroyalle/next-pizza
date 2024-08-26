import { PaymentCallbackData } from '@/@types/yookassa';
import { prisma } from '@/prisma/prisma-client';
import {
  OrderSuccessTemplate,
  OrderCancelledTemplate,
} from '@/shared/components/shared/email-templates';
import { sendEmail } from '@/shared/lib';
import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import { StatusEnum } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as PaymentCallbackData;

    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' });
    }

    const isSucceeded = body.object.status === 'succeeded';

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? StatusEnum.SUCCEEDED : StatusEnum.CANCELLED,
      },
    });

    const items = JSON.parse(order?.items as string) as CartItemDTO[];

    if (isSucceeded) {
      sendEmail(
        order.email,
        'Next Pizza / Ваш заказ успешно оформлен',
        OrderSuccessTemplate({ orderId: order.id, items }),
      );
    } else {
      sendEmail(
        order.email,
        'Next Pizza / Ваш заказ был отменен',
        OrderCancelledTemplate({ orderId: order.id, items }),
      );
    }
  } catch (error) {
    console.log('[Checkout Callback] Error:', error);
    return NextResponse.json({ error: 'Server error' });
  }
}
