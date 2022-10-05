import axios from "axios";
import { JSONheader } from "../utils/headers";
import { convertURLToBlob } from "../utils/sendData";
import { BACK_URL } from "../axios/axiosInstance";

export const sendData = async (RECORD_URL) => {
  const URL = BACK_URL + "/upload";
  const headers = {
    "Content-Type": "multipart/form-data",
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
  const URL = BACK_URL + "/data";
  try {
    await axios.post(URL, data, {
      headers: JSONheader,
    });
  } catch (err) {
    console.log(err);
  }
};
