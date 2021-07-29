import React from "react";
import "./skills.css";
import Separator from "../../common/separator/Separator";
import { SkillsData } from "../../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item, key) => {
          return (
            <div key={key}>
              <div className="skills-section">
                <label className="skills-section-title">{item.type}</label>
                <div className="skills-list">
                  {item.list.map((skill, key) => {
                    return (
                      <div key={key}>
                        <SkillCard skill={skill} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
