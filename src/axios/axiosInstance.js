import axios from "axios";

export const BACK_URL = "http://127.0.0.1:62345";
// export const BACK_URL = "https://api.dyslexia-test.online";

export const axiosInstance = () => {
  return axios.create({
    baseURL: BACK_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
