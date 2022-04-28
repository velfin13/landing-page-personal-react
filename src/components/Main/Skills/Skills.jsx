import React, { useState } from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          <Skills1 />
          <Skills2 />
        </div>

        <div>
          <Skills3 />
        </div>
      </div>
    </section>
  );
};

const Skills1 = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={
        toggle
          ? "skills__content skills__open"
          : "skills__content skills__close"
      }
    >
      <div className="skills__header">
        <i className="uil uil-brackets-curly skills__icon"></i>

        <div>
          <h1 className="skills__titles">FrondEnd developer</h1>
          <span className="skils__subtitle">More than 3 years</span>
        </div>
        <i
          className="uil uil-angle-down skills__arrow"
          onClick={handleToggle}
        ></i>
      </div>

      <div className="skills__list grid">
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__names">HTML</h3>
            <span className="skills__number">100%</span>
          </div>
          <div className="skills__bar">
            <div className="span skills__percentage skills__html"></div>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__names">CSS</h3>
            <span className="skills__number">80%</span>
          </div>
          <div className="skills__bar">
            <div className="span skills__percentage skills__css"></div>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__names">REACT</h3>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
            <div className="span skills__percentage skills__react"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills2 = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={
        toggle
          ? "skills__content skills__open"
          : "skills__content skills__close"
      }
    >
      <div className="skills__header">
        <i className="uil uil-server skills__icon"></i>

        <div>
          <h1 className="skills__titles">BackEnd developer</h1>
          <span className="skils__subtitle">More than 2 years</span>
        </div>
        <i
          className="uil uil-angle-down skills__arrow"
          onClick={handleToggle}
        ></i>
      </div>

      <div className="skills__list grid">
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__names">Node</h3>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
            <div className="span skills__percentage skills__node"></div>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__names">PHP</h3>
            <span className="skills__number">80%</span>
          </div>
          <div className="skills__bar">
            <div className="span skills__percentage skills__php"></div>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__names">Laravel 7</h3>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
            <div className="span skills__percentage skills__laravel7"></div>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__names">SQL</h3>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
            <div className="span skills__percentage skills__sql"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills3 = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={
        toggle
          ? "skills__content skills__open"
          : "skills__content skills__close"
      }
    >
      <div className="skills__header">
        <i className="uil uil-swatchbook skills__icon"></i>

        <div>
          <h1 className="skills__titles">Designer</h1>
          <span className="skils__subtitle">More than 2 years</span>
        </div>
        <i
          className="uil uil-angle-down skills__arrow"
          onClick={handleToggle}
        ></i>
      </div>

      <div className="skills__list grid">
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__names">Adobe Illustrator</h3>
            <span className="skills__number">60%</span>
          </div>
          <div className="skills__bar">
            <div className="span skills__percentage skills__illustrator"></div>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__names">Figma</h3>
            <span className="skills__number">90%</span>
          </div>
          <div className="skills__bar">
            <div className="span skills__percentage skills__figma"></div>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__names">Photoshop</h3>
            <span className="skills__number">80%</span>
          </div>
          <div className="skills__bar">
            <div className="span skills__percentage skills__photoshop"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
