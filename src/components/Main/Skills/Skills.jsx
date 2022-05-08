import React, { useEffect, useState } from "react";
import SkillsCore from "../../core/Skills";
import {
  getSkillBackEnd,
  getSkillDesigner,
  getSkillFrondEnd,
} from "../../../api/user";
import "./Skills.scss";

const Skills = ({lng}) => {
  const [skillFrondEnd, setSkillFrondEnd] = useState({});
  const [skillBackEnd, setSkillBackEnd] = useState({});
  const [skillDesign, setSkillDesign] = useState({});

  useEffect(() => {
    getSkillFrondEnd(lng).then((res) => setSkillFrondEnd(res.data[0] ?? {}));
  }, [lng]);

  useEffect(() => {
    getSkillBackEnd(lng).then((res) => setSkillBackEnd(res.data[0] ?? {}));
  }, [lng]);

  useEffect(() => {
    getSkillDesigner(lng).then((res) => setSkillDesign(res.data[0] ?? {}));
  }, [lng]);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          <SkillsCore skill={skillFrondEnd} />
          <SkillsCore skill={skillDesign} />
        </div>

        <div>
          <SkillsCore skill={skillBackEnd} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
