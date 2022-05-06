import axios from "axios";
import { BASE_URL } from "../utils/const";
export const getSocials = async () => {
  try {
    const url = `${BASE_URL}/api/socials`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};
