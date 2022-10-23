import axios from "axios";
import { BACK_URL } from "../axios/axiosInstance";

export const getAudiosService = async () => {
  try {
    const URL = `${BACK_URL}/api/audio`;
    const { data: resp } = await axios.get(URL);
    return resp;
  } catch (err) {
    console.log(err);
  }
};

export const uploadAudio = async (data) => {
  try {
    const URL = `${BACK_URL}/api/audio`;
    const { data: resp } = await axios.post(URL, data);
    return resp;
  } catch (err) {
    console.log(err);
  }
};
