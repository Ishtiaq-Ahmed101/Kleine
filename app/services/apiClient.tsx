import axios from "axios";

export function axiosClient() {
  return axios.create({
    baseURL: "127.0.0.1:5000/api",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
