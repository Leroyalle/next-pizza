import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text={'Фильтрация'} size={'sm'} className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="1" />
      </div>
      <div className="mt5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="flexx gap-3 mb-5">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="100" min={0} max={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
    </div>
  );
};
