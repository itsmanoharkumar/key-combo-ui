import { handleNetworkError } from "@/helpers/helper";
import { OPERATING_SYSTEM } from "@/types/types";
import axios from "axios";
import * as qs from "qs";

export async function fetchShortcutCategoriesForProduct(
  url: string,
  productId: string,
  operatingSystem: OPERATING_SYSTEM
) {
  const query = qs.stringify({
    filters: {
      product: {
        id: {
          $eq: productId,
        },
      },
    },
    populate: {
      shortcuts: {
        filters: {
          operatingSystem: {
            $eq: operatingSystem,
          },
        },
      },
    },
  });
  const computedUrl = `${url}?${query}`;
  if (!productId) {
    throw new Error("Product ID is not defined");
  }
  try {
    const response = await axios.get(computedUrl);
    return response.data;
  } catch (e) {
    throw handleNetworkError(e);
  }
}
