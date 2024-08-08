import { axiosInstance } from './instance';
import { ApiRouter } from './constants';
import { CartDTO } from './dto/cart.dto';

export const fetchCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>(ApiRouter.CART);

  return data;
};
