import { CartItemDTO } from '../services/dto/cart.dto';

/**
 * Функция для подсчета стоимости добавленного в корзину товара
 * @param item добавленный товар в корзину
 * @returns number полная стоимость товара учитывая его количество
 */

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);
  return (ingredientsPrice + item.productItem.price) * item.quantity;
};
