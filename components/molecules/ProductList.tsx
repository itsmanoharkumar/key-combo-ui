import ProductListItem from "@/components/atoms/ProductListItem";
import { Product } from "@/types/types";

interface ProductListProps {
  products: Product[];
  onClick: (id: number) => void;
  selectedProductId: number;
}

export default function ProductList({
  products,
  onClick,
  selectedProductId,
}: ProductListProps) {
  return (
    <div className="h-full overflow-y-auto px-2 select-none">
      {products.map((product) => {
        return (
          <ProductListItem
            key={product.id}
            {...product}
            isActive={product.id === selectedProductId}
            onClick={() => onClick(product.id)}
          />
        );
      })}
    </div>
  );
}
