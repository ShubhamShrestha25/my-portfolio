import React from "react";
import { SocialData } from "../../data/social";
import "./socialcontact.css";

const SocialContact = () => {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item, key) => {
        return (
          <div key={key}>
            <a href={item.link}>
              <div className="social-icon-div">
                <img src={item.icon} alt="missing" className="social-icon" />
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SocialContact;
