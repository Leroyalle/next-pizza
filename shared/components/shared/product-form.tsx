'use client';
import { ProductWithRelations } from '@/@types/prisma';
import { useCartStore } from '@/shared/store';
import React from 'react';
import toast from 'react-hot-toast';
import { ChoosePizzaForm } from './choose-pizza-form';
import { ChooseProductForm } from './choose-product-form';

interface Props {
  product: ProductWithRelations;
  className?: string;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit: _onSubmit }) => {
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const [loading, addCartItem] = useCartStore((state) => [state.loading, state.addCartItem]);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({
        productItemId: itemId,
        ingredients,
      });
      toast.success(product.name + ' добавлен в корзину');
    } catch (error) {
      toast.error('Не удалось добавить в корзину');
      console.error(error);
    } finally {
      _onSubmit?.();
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        name={product.name}
        imageUrl={product.imageUrl}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }
  return (
    <ChooseProductForm
      name={product.name}
      price={firstItem.price}
      imageUrl={product.imageUrl}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
