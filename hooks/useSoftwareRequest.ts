import { handleNetworkError } from "@/helpers/helper";
import {
  createSoftwareRequestApi,
  getAllSoftwareRequestsApi,
  upVoteSoftwareRequestsApi,
} from "@/service/softwareRequest";
import { useSnackbar } from "notistack";
import qs from "qs";

export interface SoftwareRequestRequestPayload {
  name: string;
}

export function useSoftwareRequest() {
  const { enqueueSnackbar } = useSnackbar();

  async function createSoftwareRequest({
    name,
  }: SoftwareRequestRequestPayload) {
    try {
      if (!name) {
        enqueueSnackbar("Enter name", { variant: "warning" });
        return;
      }
      const response = await createSoftwareRequestApi({
        name: name?.toLowerCase(),
      });
      enqueueSnackbar("Success", { variant: "success" });
      return response;
    } catch (e: any) {
      const error = handleNetworkError(e);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  }

  async function getAllSoftwareRequest() {
    const query = qs.stringify({
      sort: "updatedAt:desc",
    });
    try {
      return await getAllSoftwareRequestsApi(query);
    } catch (e: any) {
      const error = handleNetworkError(e);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  }

  async function upVoteSoftwareRequest(id: number) {
    try {
      const response = await upVoteSoftwareRequestsApi(id);
      enqueueSnackbar("Voted Successfully", { variant: "success" });
      return response;
    } catch (e: any) {
      const error = handleNetworkError(e);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  }

  return {
    createSoftwareRequest,
    upVoteSoftwareRequest,
    getAllSoftwareRequest,
  };
}
