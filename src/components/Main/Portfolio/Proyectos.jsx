import React from "react";

const Proyectos = ({ link_imagen, nombre, description, link_proyecto,link_source }) => {
  return (
    <div className="portfolio__content grid">
      <img src={link_imagen} alt="img" className="portfolio__img" />

      <div className="portfolio__data">
        <h3 className="portfolio__title">{nombre}</h3>
        <p className="portfolio__description">{description}</p>
        <div className="portfolio__content-button">
          <button>
            <a
              href={link_proyecto}
              target="_blank"
              className="button button--flex button--small portfolio__button"
              rel="noreferrer"
            >
              Demo <i className="uil uil-arrow-right button__icon"></i>
            </a>
          </button>
          <button>
            <a
              href={link_source}
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
  );
};

export default Proyectos;
