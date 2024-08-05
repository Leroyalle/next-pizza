import { cn } from '@/lib/utils';
import React from 'react';
import { ProductImage } from './product-image';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  className?: string;
  name: string;
  items?: any[];
  ingredients?: any[];
  onClickAdd?: VoidFunction;
  imageUrl: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  className,
  name,
  items,
  ingredients,
  onClickAdd,
  imageUrl,
}) => {
  const textDetails = '30 см, традиционное тесто 30';
  const totalPrice = 550;

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
        <p className="text-gray-400">{textDetails}</p>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice}
        </Button>
      </div>
    </div>
  );
};
