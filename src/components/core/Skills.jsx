import { useEffect, useState } from "react";

const Skills = ({ skill = {} }) => {
  const [toggle, setToggle] = useState(false);
  const [skills, setskills] = useState([]);

  useEffect(() => {
    setskills(skill.skills ?? []);
  }, [skill]);

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
          <h1 className="skills__titles">{skill.title ? skill.title : ""}</h1>
          <span className="skils__subtitle">
            {skill.subtitle ? skill.subtitle : ""}
          </span>
        </div>
        <i
          className="uil uil-angle-down skills__arrow"
          onClick={handleToggle}
        ></i>
      </div>

      <div className="skills__list grid">
        {skills.map((skillState, index) => (
          <div className="skills__data" key={index}>
            <div className="skills__titles">
              <h3 className="skills__names">
                {skillState.skill ? skillState.skill : ""}
              </h3>
              <span className="skills__number">
                {skillState.porcentaje ? skillState.porcentaje : ""} %
              </span>
            </div>
            <div className="skills__bar">
              <div
                className={`span skills__percentage skills__${
                  skillState.porcentaje ? skillState.porcentaje : ""
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
