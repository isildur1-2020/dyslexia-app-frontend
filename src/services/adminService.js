import axios from "axios";
import { standardHeaders } from "../utils/headers";
import { BACK_URL } from "../axios/axiosInstance";

export const createClient = async (data) => {
  try {
    const URL = `${BACK_URL}/api/client`;
    const { data: resp } = await axios.post(URL, data, {
      headers: standardHeaders(),
    });
    return resp;
  } catch (err) {
    console.log(err);
  }
};

export const getClientsService = async (group_id) => {
  try {
    const URL = `${BACK_URL}/api/client/${group_id}`;
    const { data } = await axios.get(URL, { headers: standardHeaders() });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateTestClient = async (username, tests) => {
  try {
    const URL = `${BACK_URL}/api/client/${username}`;
    const { data } = await axios.put(
      URL,
      { tests },
      { headers: standardHeaders() }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteClient = async (username) => {
  try {
    const URL = `${BACK_URL}/api/client/${username}`;
    const { data } = await axios.delete(URL, { headers: standardHeaders() });
    return data;
  } catch (err) {
    console.log(err);
  }
};
