import { handleNetworkError } from "@/helpers/helper";
import { getAllShortcutApi } from "@/service/shortcut";
import { useSnackbar } from "notistack";
import qs from "qs";

export interface SoftwareRequestRequestPayload {
  name: string;
}

export function useShortcut() {
  const { enqueueSnackbar } = useSnackbar();

  async function searchShortcut(productId: number, searchTerm: string) {
    const query = qs.stringify({
      populate: {
        product: {
          filters: {
            id: productId,
          },
        },
      },
      filters: {
        shortText: {
          $containsi: searchTerm,
        },
      },
    });
    try {
      return await getAllShortcutApi(query);
    } catch (e: any) {
      const error = handleNetworkError(e);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  }

  return {
    searchShortcut,
  };
}
