import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import * as React from 'react';

interface Props {
  orderId: number;
  items: CartItemDTO[];
}

export const OrderCancelledTemplate: React.FC<Props> = ({ orderId, items }) => (
  <div>
    <h1>Ваш заказ был отменен! 😕</h1>

    <p>Ваш заказ №{orderId} отменен. Список товаров:</p>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productItem.product.name} | {item.productItem.price} x {item.quantity} =
          {item.productItem.price * item.quantity}
        </li>
      ))}
    </ul>
  </div>
);
