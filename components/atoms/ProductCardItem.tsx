import { Product } from "@/types/types";
import Image from "next/image";

interface ProductListItemProps extends Product {
  onClick: (id: number) => void;
}

export default function ProductCardItem({
  id,
  attributes: { name, logo },
  onClick,
}: ProductListItemProps) {
  function myImageLoader({ src, width, quality }: any) {
    return `${process.env.NEXT_PUBLIC_SERVER_BASE_URL?.replace(
      "api/",
      ""
    )}${src}?w=${width}&q=${quality || 75}`;
  }

  // let imageUrl = logo?.data?.attributes?.formats?.thumbnail?.url;
  // if (imageUrl?.startsWith("/")) {
  //   imageUrl = imageUrl
  //     .replace("/", process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/")
  //     .replace("api/", "");
  // }
  let imageUrl = myImageLoader({
    src: logo?.data?.attributes?.formats?.thumbnail?.url,
    width: logo?.data?.attributes?.formats?.thumbnail?.width,
    quality: 75,
  });
  console.log(imageUrl);
  return (
    <div
      className={`flex justify-center flex-col items-center bg-gray-800 text-gray-200 text-sm font-semibold
      p-2 flex-wrap transition-all duration-100 hover:text-black hover:cursor-pointer my-1 rounded border-[1px] border-gray-300 hover:border-gray-400 hover:bg-pastelYellow w-[46%] sm:w-[30%] md:w-[150px] h-[150px] mr-1`}
      onClick={() => onClick(id)}
    >
      {imageUrl && (
        <div
          className={
            "p-2 bg-gray-100 border-gray-500 border-[1px] mb-2 rounded-2xl flex justify-center"
          }
        >
          {imageUrl && (
            <Image src={imageUrl} alt="logo" width={50} height={50} />
          )}
        </div>
      )}
      <div>{name}</div>
    </div>
  );
}
