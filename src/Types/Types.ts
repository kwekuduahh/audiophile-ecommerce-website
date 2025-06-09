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

type Image = {
	[K in Display]: string;
};

export type Display = 'mobile' | 'tablet' | 'desktop';

type Include = {
	quantity: number;
	item: string;
};

type Gallery = {
	first: Image;
	second: Image;
	third: Image;
};

type OtherItem = {
	slug: string;
	name: string;
	otherItemImage: Image;
};
