import React from "react";
import "./body.css";
import About from "./about/About";
import Project from "./projects/Project";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import Contact from "./contact/Contact";
import Education from "./education/Education";

const Body = () => {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
