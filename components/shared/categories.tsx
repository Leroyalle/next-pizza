'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';

interface Props {
  className?: string;
  items: Category[];
}

export const Categories: React.FC<Props> = ({ className, items }) => {
  const activeId = useCategoryStore((state) => state.activeId);
  console.log(activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {items.map(({ name, id }, i) => (
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
