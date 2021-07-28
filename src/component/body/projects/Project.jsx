import React from "react";
import { ProjectData } from "../../data/project";
import "./product.css";
import ProjectCard from "./ProjectCard";
import Separator from "../../common/separator/Separator";

const Project = () => {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project, key) => {
          return (
            <div key={key}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
