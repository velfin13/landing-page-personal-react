import React, { useEffect, useState } from "react";
import { getAboutMe } from "../../../api/user";
import "./About.scss";

const About = () => {
  const [aboutMe, setAboutMe] = useState({});

  useEffect(() => {
    getAboutMe().then((res) => setAboutMe(res.data[0] ?? {}));
  }, []);

  console.log(aboutMe);

  return (
    <section className="about section" id="about">
      <h2 className="section__title">{aboutMe.title ? aboutMe.title : ""}</h2>
      <span className="section__subtitle">
        {aboutMe.subtitle ? aboutMe.subtitle : ""}
      </span>

      <div className="about__container container grid">
        <img
          src={aboutMe.imagen?.url ? aboutMe.imagen?.url : ""}
          alt="img"
          className="about__img"
        />

        <div className="about__data">
          <p className="about__description">
            {aboutMe.descripcion ? aboutMe.descripcion : ""}
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">
                {aboutMe.info1?.title ? aboutMe.info1?.title : ""}
              </span>
              <span className="about__info-name">
                {aboutMe.info1?.subtitle ? aboutMe.info1?.subtitle : ""}
              </span>
            </div>

            <div>
              <span className="about__info-title">
                {aboutMe.info2?.title ? aboutMe.info2?.title : ""}
              </span>
              <span className="about__info-name">
                {aboutMe.info2?.subtitle ? aboutMe.info2?.subtitle : ""}
              </span>
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
