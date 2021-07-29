import React from "react";
import "./workcard.css";
const WorkCard = ({ item }) => {
  return (
    <div className="work-card">
      <img className="work-logo" src={item.companyLogo} alt="no pic" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dataEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
