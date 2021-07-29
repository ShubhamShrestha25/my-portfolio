import React from "react";
import "./web.css";

const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i className="fi-rr-edit-alt option-icon" />
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i className="fi-rr-laptop option-icon" />
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#education">
          <i className="fi-rr-book-alt option-icon" />
          Education
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i className="fi-rr-briefcase option-icon" />
          Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i className="fi-rr-user option-icon" />
          Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
