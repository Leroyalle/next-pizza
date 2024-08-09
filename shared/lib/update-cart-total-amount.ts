import { prisma } from '@/prisma/prisma-client';
import { calcCartItemTotalPrice } from './calc-cart-item-total-price';

/**
 * Функция обновления общей стоимости корзины
 *
 * @example updateCartTotalAmount(token)
 *
 * @param token токен юзера которому пренадлежит корзина
 * @returns {} обновленный объект корзины
 */

export const updateCartTotalAmount = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      items: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });

  if (!userCart) {
    return;
  }

  const totalAmount = userCart.items.reduce((acc, item) => acc + calcCartItemTotalPrice(item), 0);

  return await prisma.cart.update({
    where: { id: userCart.id },
    data: {
      totalAmount,
    },
    include: {
      items: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });
};
