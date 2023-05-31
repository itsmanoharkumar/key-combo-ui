import { SoftwareRequestRequestPayload } from "@/hooks/useSoftwareRequest";
import { SoftwareRequest } from "@/types/types";
import axios from "axios";

export async function createSoftwareRequestApi(
  payload: SoftwareRequestRequestPayload
) {
  const response = await axios.post("/software-requests", {
    data: payload,
  });
  return response?.data;
}

export async function getAllSoftwareRequestsApi(
  query?: string
): Promise<{ data: SoftwareRequest[] }> {
  const response = await axios.get("/software-requests?" + query);
  return response?.data;
}

export async function upVoteSoftwareRequestsApi(
  id: number
): Promise<SoftwareRequest> {
  const response = await axios.put(`/software-requests/${id}/vote`);
  return response?.data;
}
