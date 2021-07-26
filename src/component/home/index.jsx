import React from "react";
import Header from "../header";
import Body from "../body";
import Footer from "../footer";
import "./home.css";

const home = () => {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default home;
