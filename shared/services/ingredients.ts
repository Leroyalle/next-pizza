import { Ingredient, Product } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRouter } from './constants';

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRouter.INGREDIENTS)).data;
};
