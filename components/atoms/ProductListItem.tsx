import { Product } from "@/types/types";
import clsx from "clsx";

interface ProductListItemProps extends Product {
  onClick: (id: number) => void;
  isActive: boolean;
}

export default function ProductListItem({
  id,
  attributes: { name },
  onClick,
  isActive,
}: ProductListItemProps) {
  const className = clsx(
    "flex justify-start p-2 flex-wrap hover:text-black text-gray-600 hover:cursor-pointer my-1 rounded border-[1px]" +
      " border-transparent hover:border-gray-400 hover:bg-pastelYellow",
    { "border-gray-500": isActive }
  );
  return (
    <div className={className} onClick={() => onClick(id)}>
      {name}
    </div>
  );
}
