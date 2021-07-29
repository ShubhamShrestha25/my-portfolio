import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      &copy;{new Date().getFullYear()} Shubham Shrestha | All rights reserved
    </div>
  );
};

export default Footer;
