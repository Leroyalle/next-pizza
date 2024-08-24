import { z } from 'zod';
export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Не менее двух символов' }),
  lastName: z.string().min(2, { message: 'Не менее двух символов' }),
  email: z.string().email({ message: 'Введите корректную почту' }),
  phone: z.string().min(10, { message: 'Введите корректный номер телефона' }),
  address: z.string().min(5, { message: 'Введите корректный адрес' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
