'use client';

import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React from 'react';

type IngredientItem = Pick<Ingredient, 'id' | 'name'>;

interface ReturnProps {
  ingredients: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        const response = await Api.ingredients.getAll();
        setIngredients(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchIngredients();
  }, []);
  return { ingredients };
};
