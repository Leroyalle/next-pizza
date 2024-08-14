import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  className?: string;
  name: string;
  price: number;
  onSubmit: VoidFunction;
  imageUrl: string;
  loading?: boolean;
}

export const ChooseProductForm: React.FC<Props> = ({
  className,
  name,
  price,
  onSubmit,
  imageUrl,
  loading,
}) => {
  return (
    <div className={cn('flex flex-1', className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
      <div className={cn('w-[490px] bg-[#f7f6f5] p-7', className)}>
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {price}
        </Button>
      </div>
    </div>
  );
};
