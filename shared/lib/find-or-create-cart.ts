import { prisma } from '@/prisma/prisma-client';

/**
 * Функция для обновления или создания корзины в зависимости от наличия токена
 *
 * @example ```findOrCreateCart(token)```
 *
 * @param token токен корзины
 * @returns {} объект созданной или обновленной корзины
 */

export const findOrCreateCart = async (token: string) => {
  let userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
  });
  if (!userCart) {
    userCart = await prisma.cart.create({
      data: {
        token,
      },
    });
  }
  return userCart;
};
