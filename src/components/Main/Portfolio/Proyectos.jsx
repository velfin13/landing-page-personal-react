import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Proyectos = ({ portafolios = [] }) => {
  const primaryOptions = {
    type: "loop",
    pagination: false,
    autoScroll: {
      speed: 2,
    },
  };
  return (
    <div className="portfolio__container container">
      <div>
        <Splide options={primaryOptions}>
          {portafolios.map((portafolio) => (
            <SplideSlide key={portafolio.id ? portafolio.id : ""}>
              <div className="portfolio__content grid">
                <img
                  src={
                    portafolio.imagen.formats.large.url
                      ? portafolio.imagen.formats.small.url
                      : ""
                  }
                  alt="img"
                  className="portfolio__img"
                />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">
                    {portafolio.nombre ? portafolio.nombre : ""}
                  </h3>
                  <p className="portfolio__description">
                    {portafolio.description ? portafolio.description : ""}
                  </p>
                  <div className="portfolio__content-button">
                    <button>
                      <a
                        href={portafolio.url ? portafolio.url : ""}
                        target="_blank"
                        className="button button--flex button--small portfolio__button"
                        rel="noreferrer"
                      >
                        Demo{" "}
                        <i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    </button>
                    <button>
                      <a
                        href={portafolio.source ? portafolio.source : ""}
                        target="_blank"
                        className="button button--flex button--small portfolio__button"
                        rel="noreferrer"
                      >
                        source <i className="uil uil-github button__icon"></i>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Proyectos;
