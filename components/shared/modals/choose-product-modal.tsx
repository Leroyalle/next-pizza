'use client';
import { Dialog } from '@/components/ui';
import { DialogContent } from '@/components/ui/dialog';
import React from 'react';
import { Title } from '../title';
import { Product } from '@prisma/client';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';

interface Props {
  className?: string;
  product: Product;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        <ChooseProductForm name={product.name} imageUrl={product.imageUrl} />
      </DialogContent>
    </Dialog>
  );
};
