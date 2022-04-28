/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import ecommerce_games from "../../../assets/img/ecommerce_game_strapi_next.png";
import css_flexbox from "../../../assets/img/css_flexbox.png";
import tech_pro from "../../../assets/img/tech-pro-audifonos.png";
import citas_medicas_vite from "../../../assets/img/citas_medicas_vite.png";

import "./Portfolio.scss";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Proyectos from "./Proyectos";

const Portfolio = () => {
  const primaryOptions = {
    type: "loop",
    pagination: false,
    autoScroll: {
      speed: 2,
    }
  };
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="portfolio__container container">
        <div>
          <Splide options={primaryOptions}>
            <SplideSlide>
              <Proyectos
                nombre="E-Commerce with Next"
                description="It is a virtual store made with Next.js, React, Strapi, Stripe, AWS, SASS"
                link_imagen={ecommerce_games}
                link_source="https://github.com/velfin13/ecommerce-game-nextjs"
                link_proyecto="https://ecommerce-velfin-nextjs.netlify.app/"
              />
            </SplideSlide>
            <SplideSlide>
              <Proyectos
                nombre="Practice css with flexbox"
                description="Landing page created with CSS FLEXBOX"
                link_imagen={css_flexbox}
                link_source="https://github.com/velfin13/practica_landing_page_flexbox"
                link_proyecto="https://velfin13.github.io/practica_landing_page_flexbox/"
              />
            </SplideSlide>
            <SplideSlide>
              <Proyectos
                nombre="TechPro headphone page made with HTML CSS GRID FLEXBOX"
                description="It is a small Web project adapted to all devices and all web browsers"
                link_imagen={tech_pro}
                link_source="https://github.com/velfin13/tech-pro-audifonos-page"
                link_proyecto="https://velfin13.github.io/tech-pro-audifonos-page/"
              />
            </SplideSlide>
            <SplideSlide>
              <Proyectos
                nombre="Proyecto de citas Veterinarias con react"
                description="Un pequeño proyecto de citas hecho con React, Tailwind CSS y más"
                link_imagen={citas_medicas_vite}
                link_source="https://github.com/velfin13/administrador-de-citas-react-con-vite"
                link_proyecto="https://citas-paciente-vite.netlify.app/"
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
