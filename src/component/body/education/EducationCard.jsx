import React from "react";
import "./educationcard.css";

const EducationCard = ({ item }) => {
  return (
    <div className="education-card">
      <img className="education-logo" src={item.companyLogo} alt="no pic" />
      <div className="education-info">
        <label className="education-name">{item.school}</label>
        <div className="education-dates">
          <label>{item.dateJoining}</label>-<label>{item.dataEnd}</label>
        </div>
        <label className="education-name">{item.level}</label>
        <label className="education-name">{item.location}</label>
      </div>
    </div>
  );
};

export default EducationCard;
