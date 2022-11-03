import axios from "axios";

export const BACK_URL = "https://dyslexia2-test.online";

export const axiosInstance = () => {
  return axios.create({
    baseURL: BACK_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
