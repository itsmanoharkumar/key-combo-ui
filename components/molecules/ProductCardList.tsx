import ProductCardItem from "@/components/atoms/ProductCardItem";
import { Product } from "@/types/types";

interface ProductListProps {
  products: Product[];
  onClick: (id: number) => void;
  selectedProductId: number;
}

export default function ProductCardList({
  products,
  onClick,
  selectedProductId,
}: ProductListProps) {
  return (
    <div className="sm:p-10 p-4 w-full overflow-y-auto px-2 select-none flex flex-wrap  justify-center items-start">
      {products?.map((product) => {
        return (
          <ProductCardItem
            key={product.id}
            {...product}
            onClick={() => onClick(product.id)}
          />
        );
      })}
    </div>
  );
}
