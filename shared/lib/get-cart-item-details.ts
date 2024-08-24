import { Ingredient } from '@prisma/client';
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza';
import { CartStateItem } from './get-cart-details';

/**
 * Функция принимает информацию о пицце и пушит ее в массив, после чего конвертирует ее в строку
 *
 * @example getCartItemDetails(2, 40, ingredients)
 *
 * @param pizzaType Тип теста пиццы
 * @param pizzaSize Размер пиццы
 * @param ingredients Список ингредиентов
 * @returns string Описание добавленной пиццы
 */

export const getCartItemDetails = (
  ingredients: CartStateItem['ingredients'],
  pizzaType?: PizzaType,
  pizzaSize?: PizzaSize,
) => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};
