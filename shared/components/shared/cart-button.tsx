'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { CartDrawer } from './cart-drawer';
import { useCartStore } from '@/shared/store';

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const [totalAmount, items] = useCartStore((state) => [state.totalAmount, state.items]);
  return (
    <CartDrawer>
      <Button className={cn('group relative', className)}>
        <b>{totalAmount} ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3"></span>
        <div className="flex items-center gap-1 transition duretion-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="h-4 w-4 relative" strokeWidth={2}></ShoppingCart>
          <b>{items.length}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
};
