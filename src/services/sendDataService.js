import axios from "axios";
import { standardHeaders } from "../utils/headers";
import { convertURLToBlob } from "../utils/sendData";
import { BACK_URL } from "../axios/axiosInstance";

export const sendData = async (RECORD_URL) => {
  const URL = BACK_URL + "/api/upload";
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: localStorage.getItem("token"),
  };
  try {
    const blob = await convertURLToBlob(RECORD_URL);
    if (blob === null) return;
    const formData = new FormData();
    formData.append("record", blob);
    return await axios.post(URL, formData, { headers });
  } catch (err) {
    console.log(err);
  }
};

export const sendEmailData = async (data) => {
  const URL = BACK_URL + "/api/data";
  try {
    await axios.post(URL, data, {
      headers: standardHeaders(),
    });
  } catch (err) {
    console.log(err);
  }
};
