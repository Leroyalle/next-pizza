'use client';

import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [types, { toggle: toggleTypes }] = useSet(new Set<string>([]));

  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
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

  return (
    <div className={className}>
      <Title text={'Фильтрация'} size={'sm'} className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          title="Тип теста"
          className="mb-5"
          onClickCheckbox={toggleTypes}
          selected={types}
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
          value={[price.priceFrom, price.priceTo]}
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
