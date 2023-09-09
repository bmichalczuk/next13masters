export type ProductListItemProps = {
	product: {
		name: string;
		price: number;
		category: string;
		coverImage: coverImageProps;
		id: number;
	};
};

export type coverImageProps = {
	src: string;
	alt: string;
};
