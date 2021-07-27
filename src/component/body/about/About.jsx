import React from "react";
import SocialContact from "../../common/social-contact/SocialContact";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi there 👋, I'm <br />
          <span className="info-name">Shubham Shrestha</span>
          <br /> I am a Web Developer, Gamer, Student.
        </div>
        <div className="about-photo">
          <img className="picture" src="./images/1.jpg" alt="No Pic" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
};

export default About;
