import { handleNetworkError } from "@/helpers/helper";
import { URLS } from "@/service/constants";
import axios, { AxiosResponse } from "axios";

interface RegisterRequestPayload {
  email: string;
  username: string;
  password: string;
}

interface LoginRequestPayload {
  identifier: string;
  password: string;
}

export async function register(payload: RegisterRequestPayload) {
  try {
    const response: AxiosResponse = await axios.post(URLS.register, payload);
    return response.data;
  } catch (e: any) {
    throw handleNetworkError(e);
  }
}

export async function login(payload: LoginRequestPayload) {
  try {
    const response: AxiosResponse = await axios.post(URLS.login, payload);
    return response.data;
  } catch (e: any) {
    throw handleNetworkError(e);
  }
}

export async function getCurrentUser() {
  try {
    const response: AxiosResponse = await axios.get(URLS.me);
    return response.data;
  } catch (e: any) {
    throw handleNetworkError(e);
  }
}
