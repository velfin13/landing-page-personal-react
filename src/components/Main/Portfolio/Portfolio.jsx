/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import Proyectos from "./Proyectos";
import { getPortafolios, getPortafolioHeader } from "../../../api/user";

const Portfolio = ({ lng }) => {
  const [portafolios, setPortafolios] = useState([]);
  const [portafolioHeader, setPortafolioHeader] = useState({});

  useEffect(() => {
    getPortafolios(lng).then((res) => setPortafolios(res.data ?? []));
  }, [lng]);

  useEffect(() => {
    getPortafolioHeader(lng).then((res) => setPortafolioHeader(res.data[0] ?? {}));
  }, [lng]);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">
        {portafolioHeader.title ? portafolioHeader.title : ""}
      </h2>
      <span className="section__subtitle">
        {portafolioHeader.subtitle ? portafolioHeader.subtitle : ""}
      </span>
      <div className="portfolio__container container">
        <Proyectos portafolios={portafolios} />
      </div>
    </section>
  );
};

export default Portfolio;
