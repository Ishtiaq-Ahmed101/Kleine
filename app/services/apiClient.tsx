import axios from "axios";

export function axiosClient() {
  return axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
