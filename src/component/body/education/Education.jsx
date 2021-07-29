import React from "react";
import "./education.css";
import Separator from "../../common/separator/Separator";
import { EducationData } from "../../data/education";
import EducationCard from "./EducationCard";

const Education = () => {
    const data = EducationData
  return (
    <div className="education">
      <Separator />
      <label className="section-title">Education</label>
      <div className="education-list">
        {data.map((item, key) => {
          return (
            <div key={key}>
              <EducationCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
