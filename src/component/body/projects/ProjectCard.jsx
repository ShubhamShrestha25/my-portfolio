import React from "react";
import "./projectcard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link-button">
                <i className="fi-rr-globe" />
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link-button">
                <i className="devicon-github-original-wordmark" />
                Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag, key) => {
            return (
              <div key={key}>
                <label className="tag">{tag}</label>
              </div>
            );
          })}
        </div>
      </div>
      <img src={project.image} alt="no pic" className="project-photo" />
    </div>
  );
};

export default ProjectCard;
