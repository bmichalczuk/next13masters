import type { ProductListItemProps } from "@/ui/types";

export const ProductListItemDescription = ({
	product,
}: ProductListItemProps) => {
	return (
		<div>
			<h3>{product.name}</h3>
			<p>{product.price}</p>
			<p>{product.category}</p>
			<p>{product.price}</p>
		</div>
	);
};
