import React from "react";
import "./work.css";
import Separator from "../../common/separator/Separator";
import { WorkData } from "../../data/work";
import WorkCard from "./WorkCard";

const Work = () => {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item, key) => {
          return (
            <div key={key}>
              <WorkCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
