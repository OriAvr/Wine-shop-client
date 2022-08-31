import React from "react";
import aboutPhoto from "../../images/aboutPhoto.jpg";

import "./aboutPage.css";

const AboutPage = () => {
  return (
    <div className="wrapper">
      <img src={aboutPhoto} alt="About Banner" className="aboutPhoto" />
      <h1 className="header">For The Love of Wine!</h1>
      <br />
      <div className="aboutPageText">
        <p>
          We are passionate about wine. We strive to bring you the finest
          selection of wines, so you can easily access wines from all around the
          globe and have them delivered straight at your door. Hope you are
          having a great time shopping.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
