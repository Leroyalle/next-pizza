import { ProductItem } from '@prisma/client';
import { PizzaType, pizzaSizes } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';

/**
 * Функция для поиска доступных размеров по типу теста
 *
 * @example ```getAvailablePizzaSizes(2, items)```
 *
 * @param type тип теста пиццы
 * @param items список ингредиентов
 * @returns [] доступных размеров
 */

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
};
