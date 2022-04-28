/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import spanish from "../../../assets/language/spanish.png";
// import ingles from "../../../assets/language/ingles.png";
import "./Language.scss";

export const Language = () => {
  return (
    <select className="Language_select">
      <option>EN</option>
      <option>ES</option>
    </select>
  );
};
