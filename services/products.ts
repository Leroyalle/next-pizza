import { Product } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRouter } from './constants';

export const search = async (query: string): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(ApiRouter.SEARCH_PRODUCTS, { params: { query } }))
    .data;
};
