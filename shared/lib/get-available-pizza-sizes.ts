import { ProductItem } from '@prisma/client';
import React from 'react';
import { PizzaSize, PizzaType, pizzaSizes } from '../constants/pizza';

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]) => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
};
