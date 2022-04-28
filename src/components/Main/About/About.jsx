import React from "react";
import aboutPicture from "../../../assets/img/about.jpg";
import "./About.scss";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={aboutPicture} alt="img" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            I am a web developer, with extensive knowledge and years of
            experience, working in web technologies and Ui / Ux design
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">2+</span>
              <span className="about__info-name">Years experience</span>
            </div>

            <div>
              <span className="about__info-title">10+</span>
              <span className="about__info-name">Completed project</span>
            </div>

          </div>

          {/* <div className="about__buttons">
            <a
              download="true"
              target="_blank"
              href="assets/pdf/Alexa-Cv.pdf"
              className="button button-flex"
            >
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
