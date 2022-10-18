import axios from "axios";
import { standardHeaders } from "../utils/headers";
import { BACK_URL } from "../axios/axiosInstance";

export const createLanguaje = async (data) => {
  try {
    const URL = `${BACK_URL}/api/languaje`;
    const { data: resp } = await axios.post(URL, data, {
      headers: standardHeaders(),
    });
    return resp;
  } catch (err) {
    console.log(err);
  }
};

export const getLanguajes = async () => {
  try {
    const URL = `${BACK_URL}/api/languaje`;
    const { data: resp } = await axios.get(URL, {
      headers: standardHeaders(),
    });
    return resp;
  } catch (err) {
    console.log(err);
  }
};

export const updateLanguaje = async (languaje, data) => {
  try {
    const URL = `${BACK_URL}/api/languaje/${languaje}`;
    const { data: resp } = await axios.put(URL, data, {
      headers: standardHeaders(),
    });
    return resp;
  } catch (err) {
    console.log(err);
  }
};
