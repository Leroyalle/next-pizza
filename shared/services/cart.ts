import { axiosInstance } from './instance';
import { ApiRouter } from './constants';
import { CartDTO } from './dto/cart.dto';

export const getCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>(ApiRouter.CART)).data;
};

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
  return (await axiosInstance.patch(`${ApiRouter.CART}/${itemId}`, { quantity })).data;
};
