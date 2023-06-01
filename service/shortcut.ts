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

export const getAllShortcutApi = async (query?: string) => {
  try {
    const response = await axios.get(API_ROUTES.shortcuts + "?" + query);
    return response.data;
  } catch (e) {
    throw handleNetworkError(e);
  }
};
