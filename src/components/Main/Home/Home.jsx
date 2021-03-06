/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { getHome, getSocials } from "../../../api/user";
import SocialsHome from "../../core/Socials/SocialsHome";
import "./Home.scss";

const Home = ({ lng }) => {
  const [socials, setSocials] = useState([]);
  const [home, setHome] = useState({});

  useEffect(() => {
    getSocials(lng).then((res) => setSocials(res.data ?? []));
  }, [lng]);

  useEffect(() => {
    getHome(lng).then((res) => setHome(res.data[0] ?? []));
  }, [lng]);

  return (
    <section className="home section" id="home">
      <div className="div home__container container grid">
        <div className="home__content grid">
          <SocialsHome socials={socials} />

          <div className="home__img">
            <img
              className="home__blog"
              src={home.imagen?.url ? home.imagen?.url : ""}
              alt="img"
            />
          </div>

          <div className="home__data">
            <div className="home__title">{home.title ? home.title : ""}</div>
            <h3 className="home__subtitle">
              {home.subtitle ? home.subtitle : ""}
            </h3>
            <p className="home__description">
              {home.description ? home.description : ""}
            </p>
            <a href="#contact" className="button button--flex">
              {home.boton1 ? home.boton1 : ""}{" "}
              <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">{home.boton2 ? home.boton2 : ""}</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
