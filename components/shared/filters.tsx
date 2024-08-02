'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []),
  );
  const [pizzaTypes, { toggle: toggleTypes }] = useSet(
    new Set<string>(
      searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [],
    ),
  );

  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  const onChangePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const filters = {
      ...price,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };
    const query = qs.stringify(filters, {
      arrayFormat: 'comma',
    });
    router.push(`?${query}`, { scroll: false });
  }, [price, sizes, pizzaTypes, selectedIngredients, router]);

  return (
    <div className={className}>
      <Title text={'Фильтрация'} size={'sm'} className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          title="Тип теста"
          className="mb-5"
          onClickCheckbox={toggleTypes}
          selected={pizzaTypes}
          items={[
            { text: 'Тонкое', value: '1' },
            { text: 'Традиционное', value: '2' },
          ]}
          loading={loading}
          name="sizes"
        />

        <CheckboxFiltersGroup
          title="Размеры"
          className="mb-5"
          onClickCheckbox={toggleSizes}
          selected={sizes}
          items={[
            { text: '20 см', value: '20' },
            { text: '30 см', value: '30' },
            { text: '40 см', value: '40' },
          ]}
          loading={loading}
          name="sizes"
        />
      </div>
      <div className="mt5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="flex gap-3 mb-5">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(price.priceFrom)}
            onChange={(e) => onChangePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="100"
            min={0}
            max={1000}
            value={String(price.priceTo)}
            onChange={(e) => onChangePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[price.priceFrom || 0, price.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mb-5"
        limit={3}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};
