import { API_ROUTES } from "@/helpers/constants";
import { handleNetworkError } from "@/helpers/helper";
import axios from "axios";

export const getProduct = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw handleNetworkError(e);
  }
};

export const getAllProductApi = async (query?: string) => {
  try {
    const response = await axios.get(API_ROUTES.products + "?" + query);
    return response.data;
  } catch (e) {
    throw handleNetworkError(e);
  }
};
