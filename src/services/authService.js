import axios from "axios";
import { BACK_URL } from "../axios/axiosInstance";

export const signinService = async (data) => {
  try {
    const URL = `${BACK_URL}/api/auth/signin`;
    const { data: resp } = await axios.post(URL, data);
    return resp;
  } catch (err) {
    console.log(err);
  }
};
