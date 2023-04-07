import ProductCardBox from "@/components/ProductCardBox";
import { API_ROUTES } from "@/helpers/constants";
import fetcher from "@/service/service";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Index() {
  const { data, error, isLoading } = useSWR(API_ROUTES.products, fetcher);
  const router = useRouter();
  const productList = data?.data;
  if (error) {
    return <div>Some error occurred</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
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
