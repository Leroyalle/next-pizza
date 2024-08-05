import { cn } from '@/shared/lib/utils';
import React from 'react';
import { PizzaImage } from './pizza-image';
import { Title } from './title';
import { Button } from '../ui';
import { ProductWithRelations } from '@/@types/prisma';
import { GroupVariants } from './group-variants';
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import { Ingredient } from '@prisma/client';
import { IngredientItem } from './ingredient-item';
import { useSet } from 'react-use';

interface Props {
  className?: string;
  name: string;
  items?: any[];
  ingredients?: Ingredient[];
  onClickAdd?: VoidFunction;
  imageUrl: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  className,
  name,
  items,
  ingredients,
  onClickAdd,
  imageUrl,
}) => {
  const textDetails = '30 см, традиционное тесто 30';
  const totalPrice = 550;

  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);

  const [selectedIngredients, { toggle: onAddIngredient }] = useSet(new Set<number>([]));

  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className={cn('w-[490px] bg-[#f7f6f5] p-7', className)}>
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-3 mt-3">
          <GroupVariants
            items={pizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 p-5 rounded-md overflow-auto scrollbar max-h-[250px]">
          <div className="grid grid-cols-3 gap-3 mt-5 ">
            {ingredients?.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => onAddIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice}
        </Button>
      </div>
    </div>
  );
};
