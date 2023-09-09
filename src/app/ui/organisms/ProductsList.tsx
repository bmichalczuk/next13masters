import { ProductListItem } from "../molecules/ProductListItem";
import type { ProductListItemProps } from "../types";

const products: ProductListItemProps[] = [
	{
		product: {
			name: "Super buty",
			price: 2137,
			category: "ciuchy",
			coverImage: {
				src: "/kubek1.png",
				alt: "Super buty",
			},
			id: 1,
		},
	},
	{
		product: {
			name: "Pizza",
			price: 2137,
			category: "ciuchy",
			coverImage: {
				src: "/kubek2.jpg",
				alt: "Pizza",
			},
			id: 2,
		},
	},
	{
		product: {
			name: "Piekarnik",
			price: 2137,
			category: "ciuchy",
			coverImage: {
				src: "/kubek3.jpg",
				alt: "dsfsd",
			},
			id: 3,
		},
	},
	{
		product: {
			name: "Super Mario Buty",
			price: 2137,
			category: "ciuchy",
			coverImage: {
				src: "/kubek1.png",

				alt: "fds",

			},
			id: 4,
		},
	},
];

export const ProductsList = () => {
	return (
		<ul className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 xl:grid-cols-4">
			{products.map(({ product }: ProductListItemProps) => (
				<li key={product.id}>
					<ProductListItem product={product} />
				</li>
			))}
		</ul>
	);
};
