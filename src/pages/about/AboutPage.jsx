import React from "react";
import aboutPhoto from "./aboutPhoto.jpg";

import "./aboutPage.css";

const AboutPage = () => {
  return (
    <div className="wrapper">
      <img src={aboutPhoto} alt="" className="aboutPhoto" />
      <h1 className="header">For The Love of Wine!</h1>
    </div>
  );
};

export default AboutPage;
