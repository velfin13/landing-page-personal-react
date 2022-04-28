/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import perfil from "./../../../assets/img/perfil.png";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="div home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.linkedin.com/in/velfin-velasquez/" target="_blank" className="home__social-icon">
              <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/velfin13" target="_blank" className="home__social-icon">
              <i className="uil uil-github"></i>
            </a>
            <a href="https://www.facebook.com/velfinvelasquez" target="_blank" className="home__social-icon">
              <i className="uil uil-facebook"></i>
            </a>
          </div>

          <div className="home__img">
            <img className="home__blog" src={perfil} alt="img" />
          </div>

          <div className="home__data">
            <div className="home__title">Hi, I am Velfin</div>
            <h3 className="home__subtitle">Full Stack developer</h3>
            <p className="home__description">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact me <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
