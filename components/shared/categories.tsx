'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Зaкуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Koфe' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десеpты' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeId = useCategoryStore((state) => state.activeId);
  console.log(activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map(({ name, id }, i) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          key={i}
          href={`/#${name}`}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
