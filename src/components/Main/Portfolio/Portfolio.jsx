/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import Proyectos from "./Proyectos";
import { getPortafolios } from "../../../api/user";

const Portfolio = ({lng}) => {
  const [portafolios, setPortafolios] = useState([]);

  useEffect(() => {
    getPortafolios(lng).then((res) => setPortafolios(res.data ?? []));
  }, [lng]);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="portfolio__container container">
        <Proyectos portafolios={portafolios} />
      </div>
    </section>
  );
};

export default Portfolio;
