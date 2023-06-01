import { handleNetworkError } from "@/helpers/helper";
import { getAllProductApi } from "@/service/product";
import { useSnackbar } from "notistack";
import qs from "qs";

export interface SoftwareRequestRequestPayload {
  name: string;
}

export function useProduct() {
  const { enqueueSnackbar } = useSnackbar();

  async function searchProduct(searchTerm: string) {
    const query = qs.stringify({
      filters: {
        name: {
          $containsi: searchTerm,
        },
      },
    });
    try {
      return await getAllProductApi(query);
    } catch (e: any) {
      const error = handleNetworkError(e);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  }

  return {
    searchProduct,
  };
}
