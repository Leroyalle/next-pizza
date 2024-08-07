import { PizzaSize, PizzaType } from '../constants/pizza';

export interface ICartItem {
  id: number;
  name: string;
  quantity: number;
  imageUrl: string;
  price: number;
  pizzaSize?: PizzaSize;
  pizzaType?: PizzaType;
  ingredients: Array<{ name: string; price: number }>;
}

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: ICartItem[];
  fetchCartItems: () => Promise<void>;
  updateCartItem: (id: number, quantity: number) => Promise<void>;
  addCartItem: (values: any) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
}
