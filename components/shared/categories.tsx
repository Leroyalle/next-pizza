'use client';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Кофе', 'Напитки', 'Десерты'];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map((cat, i) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === i && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          key={i}>
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
