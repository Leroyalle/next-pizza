import React from 'react';
import {
  ChoosePizzaForm,
  ChooseProductForm,
  Container,
  ProductForm,
} from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container>
      <ProductForm product={product} />
    </Container>
  );
}
