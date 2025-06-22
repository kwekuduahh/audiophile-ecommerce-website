import { z } from 'zod';

export const ICheckoutFormSchema = z.object({
	name: z
		.string({ message: 'Name is required' })
		.min(3, { message: 'Name must be at least 3 Characters' }),
	email: z.string().optional(),
	phone: z.string({ message: 'phone is required' }).min(9),
	address: z.string({ message: 'Address is required' }),
	zipcode: z
		.string({ message: 'Zip Code is required' })
		.min(4, { message: 'Zip Code must be at least 4 characters' }),
	city: z.string({ message: 'City Code is required' }),
	country: z.string({ message: 'Country Code is required' }),
	paymentOpt: z.enum(['eMoney', 'delivery']),
	eMoneyNumber: z.string({ message: 'Zip Code is required' }),
	eMoneyPin: z.string({ message: 'Zip Code is required' }),
});

export type ICheckoutForm = z.infer<typeof ICheckoutFormSchema>;
