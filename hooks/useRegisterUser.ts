import { registerApi, RegisterRequestPayload } from "@/service/authentication";
import { useSnackbar } from "notistack";

export function useRegisterUser() {
  const { enqueueSnackbar } = useSnackbar();

  async function registerUser(payload: RegisterRequestPayload) {
    try {
      const response = await registerApi(payload);
      enqueueSnackbar("Success", { variant: "success" });
      return response;
    } catch (e: any) {
      let errorMessage = "Failed to subscribe";
      if (e.response?.status === 400) {
        console.log(e.response?.data.error.message);
        if (e.response?.data?.error?.message?.includes("must be unique")) {
          errorMessage = "You already have an account";
        }
        if (e.response?.data?.error?.message?.includes("must be a valid")) {
          errorMessage = "Invalid Email";
        }
      }
      if (process.env.NODE_ENV === "development") {
        enqueueSnackbar(e.response?.data?.error?.message || errorMessage, {
          variant: "error",
        });
      } else {
        enqueueSnackbar(errorMessage, { variant: "error" });
      }
    }
  }

  return {
    registerUser,
  };
}
