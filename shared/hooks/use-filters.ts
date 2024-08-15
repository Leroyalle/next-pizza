import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useSet } from 'react-use';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}
export interface Filters {
  pizzaTypes: Set<string>;
  sizes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

export interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setSizes: (values: string) => void;
  setPizzaTypes: (values: string) => void;
  setSelectedIngredients: (values: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(',')),
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []),
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [],
    ),
  );

  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const onChangePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return React.useMemo(
    () => ({
      selectedIngredients,
      sizes,
      pizzaTypes,
      prices,
      setSelectedIngredients: toggleIngredients,
      setSizes: toggleSizes,
      setPizzaTypes: togglePizzaTypes,
      setPrices: onChangePrice,
    }),
    [sizes, pizzaTypes, prices, selectedIngredients],
  );
};
