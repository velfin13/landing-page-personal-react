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


export const getSkillFrondEnd= async () => {
  try {
    const url = `${BASE_URL}/skill-fronds`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getSkillBackEnd= async () => {
  try {
    const url = `${BASE_URL}/skill-backends`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getSkillDesigner= async () => {
  try {
    const url = `${BASE_URL}/skill-designers`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getAboutMe= async () => {
  try {
    const url = `${BASE_URL}/about-mes`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};
