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
          <a href="#project" onClick={() => setIsOpen(false)}>
            <i className="fi-rr-edit-alt option-icon" />
            Projects
          </a>
        </div>
        <div className="mobile-option" onClick={() => setIsOpen(false)}>
          <a href="#skills">
            <i className="fi-rr-laptop option-icon" />
            Skills
          </a>
        </div>
        <div className="mobile-option" onClick={() => setIsOpen(false)}>
          <a href="#education">
            <i className="fi-rr-book-alt option-icon" />
            Education
          </a>
        </div>
        <div className="mobile-option" onClick={() => setIsOpen(false)}>
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
