// Fetcher
import { Fetcher } from "openapi-typescript-fetch";
import type { paths } from "@/types";

export const useAxiosSimple = () => {
  const baseUrl = import.meta.env.VITE_API_URL as string;

  const fetcher = Fetcher.for<paths>();
  fetcher.configure({
    baseUrl,
    init: {
      credentials: "omit",
      headers: {
        // Grab token from session
        // Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  });

  return {
    fetcher,
  };
};
