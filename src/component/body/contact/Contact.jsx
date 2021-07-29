import React from "react";
import "./contact.css";
import Separator from "../../common/separator/Separator";
import SocialContact from "../../common/social-contact/SocialContact";

const Contact = () => {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/resume.pdf").default}>
            <i className="fi-rr-download  download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
