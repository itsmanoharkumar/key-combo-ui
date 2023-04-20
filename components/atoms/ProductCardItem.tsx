import { Product } from "@/types/types";
import Image from "next/image";

interface ProductListItemProps extends Product {
  onClick: (id: number) => void;
}

export default function ProductCardItem({
  id,
  attributes: { name, logo  },
  onClick,
}: ProductListItemProps) {
  let imageUrl = logo?.data?.attributes?.formats?.thumbnail?.url;
  if(imageUrl?.startsWith('/')) {
    imageUrl = imageUrl.replace('/', process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/' ).replace('api/', '');
  }
  console.log('attributes', imageUrl);
  return (
    <div
      className={`flex justify-start items-start bg-gray-800 text-gray-200 text-sm font-semibold
      p-2 flex-wrap hover:text-black hover:cursor-pointer my-1 rounded border-[1px] border-gray-300 hover:border-gray-400 hover:bg-pastelYellow w-[46%] sm:w-[30%] md:w-[150px] h-[150px] mx-1`}
      onClick={() => onClick(id)}
    >
      <div>{name}</div>
      <Image src={imageUrl} alt="test" width={50} height={50}/>
    </div>
  );
}
