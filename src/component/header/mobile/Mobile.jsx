import React from "react";
import "./mobile.css";
const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i className="fi-rr-edit-alt option-icon" />
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i className="fi-rr-laptop option-icon" />
            Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i className="fi-rr-briefcase option-icon" />
            Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i className="fi-rr-user option-icon" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
