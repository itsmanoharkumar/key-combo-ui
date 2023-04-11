import ProductCardBox from "@/components/ProductCardBox";
import { API_ROUTES } from "@/helpers/constants";
import fetcher from "@/service/service";
import { Product } from "@/types/types";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const { data } = await fetcher(API_ROUTES.products);
  return {
    props: {
      productList: data,
    },
  };
}

export default function Index({ productList }: { productList: Product[] }) {
  const router = useRouter();
  return (
    <div>
      <ul className={"flex flex-wrap justify-center m-2"}>
        {productList?.map((item: any) => (
          <ProductCardBox
            key={item.id}
            id={item.id}
            name={item.attributes.name}
            onClick={(id) => {
              router.replace("products/" + id);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
