import type { ReactNode } from 'react';

export type Product = {
	categoryName: string;
	productID: number;
	slug: string;
	productName: string;
	image: Image;
	categoryImage: Image;
	condition: boolean;
	description: string;
	features: string;
	includes: Include[];
	others: OtherItem[];
	price: number;
	gallery: Gallery;
};

export type Image = {
	[K in Display]: string;
};

export type Display = 'mobile' | 'tablet' | 'desktop';

export type Include = {
	quantity: number;
	item: string;
};

type Gallery = {
	first: Image;
	second: Image;
	third: Image;
};

export type OtherItem = {
	slug: string;
	name: string;
	Image: Image;
};

export type CartItem = {
	id: number;
	name: string;
	slug: string;
	price: number;
	quantity: number;
};

export type ShoppingCartProviderProps = {
	children: ReactNode;
};

export type ShoppingCartContextType = {
	shoppingCart: CartItem[];
	addToCart: (item: CartItem) => void;
	updateCartItemQuantity: (id: number, quantity: number) => void;
	clearCart: () => void;
	calculateTotalPrice: () => number;
	getCartItemCount: () => number;
};
