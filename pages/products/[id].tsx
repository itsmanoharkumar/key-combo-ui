import ShortcutCategoryCard from "@/components/ShortcutCateroryCard";
import { API_ROUTES } from "@/helpers/constants";
import fetcher from "@/service/service";
import { fetchShortcutCategoriesForProduct } from "@/service/shortcutCategories";
import { selectOperatingSystem } from "@/store/appSlice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useSWR from "swr";

export default function ProductPage() {
  const router = useRouter();
  const operatingSystem = useSelector(selectOperatingSystem);
  const { id } = router.query;
  const {
    data: productData,
    error: productError,
    isLoading,
  } = useSWR(id ? `${API_ROUTES.products}/${id}` : null, fetcher);
  const {
    data,
    error: shortcutCategoriesError,
    isLoading: shortcutCategoriesLoading,
  } = useSWR(
    id ? [`${API_ROUTES.shortcutCategories}`, id, operatingSystem] : null,
    ([url, id, operatingSystem]) => {
      return fetchShortcutCategoriesForProduct(
        url,
        id as string,
        operatingSystem
      );
    }
  );
  if (isLoading) {
    return <div>Loading ....</div>;
  }
  if (productError) {
    return <div>Some error occurred</div>;
  }
  const productName = productData?.data?.attributes?.name;
  const shortcutCategoryList = data?.data;
  const isShortcutCategoryListEmpty = shortcutCategoryList?.length === 0;
  return (
    <div className={"flex flex-col p-2 m-2"}>
      <h1 className={"text-[36px] font-bold ml-2"}>{productName}</h1>
      {isShortcutCategoryListEmpty && <div className={"mt-2"}>Coming soon</div>}
      <div className={"mt-2] flex flex-wrap"}>
        {shortcutCategoryList?.map((item: any) => {
          return (
            <ShortcutCategoryCard
              key={item.id}
              id={item.id}
              attributes={item.attributes}
            />
          );
        })}
      </div>
    </div>
  );
}
