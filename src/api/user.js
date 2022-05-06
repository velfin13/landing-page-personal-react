import axios from "axios";
import { BASE_URL } from "../utils/const";


export const getSocials = async () => {
  try {
    const url = `${BASE_URL}/socials`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getPortafolios = async () => {
  try {
    const url = `${BASE_URL}/portfolios`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getContacts = async () => {
  try {
    const url = `${BASE_URL}/contacs`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getHome = async () => {
  try {
    const url = `${BASE_URL}/homes`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};
