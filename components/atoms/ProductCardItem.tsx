import { Product } from "@/types/types";

interface ProductListItemProps extends Product {
  onClick: (id: number) => void;
}

export default function ProductCardItem({
  id,
  attributes: { name },
  onClick,
}: ProductListItemProps) {
  return (
    <div
      className={`flex justify-start items-start bg-gray-800 text-gray-200 text-sm font-semibold
      p-2 flex-wrap hover:text-black hover:cursor-pointer my-1 rounded border-[1px] border-gray-300 hover:border-gray-400 hover:bg-pastelYellow w-[46%] sm:w-[30%] md:w-[150px] h-[150px] mx-1`}
      onClick={() => onClick(id)}
    >
      {name}
    </div>
  );
}
