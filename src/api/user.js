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


export const getNavBar = async (lang='en') => {
  try {
    const url = `${BASE_URL}/navs?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};



export const getPortafolios = async (lang='en') => {
  try {
    const url = `${BASE_URL}/portfolios?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getContacts = async (lang='en') => {
  try {
    const url = `${BASE_URL}/contacs?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getHome = async (lang='en') => {
  try {
    const url = `${BASE_URL}/homes?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getSkillFrondEnd= async (lang='en') => {
  try {
    const url = `${BASE_URL}/skill-fronds?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getSkillBackEnd= async (lang='en') => {
  try {
    const url = `${BASE_URL}/skill-backends?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getSkillDesigner= async (lang='en') => {
  try {
    const url = `${BASE_URL}/skill-designers?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getAboutMe= async (lang='en') => {
  try {
    const url = `${BASE_URL}/about-mes?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getPortafolioHeader= async (lang='en') => {
  try {
    const url = `${BASE_URL}/portfolio-headers?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getContactHeader= async (lang='en') => {
  try {
    const url = `${BASE_URL}/contac-headers?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};


export const getSkillHeader= async (lang='en') => {
  try {
    const url = `${BASE_URL}/skill-headers?_locale=${lang}`;
    const resul = await axios.get(url);
    return resul;
  } catch (error) {
    return error;
  }
};