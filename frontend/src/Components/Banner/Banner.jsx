import React from "react";
import { BANNER_IMAGE } from "../../Contants/Images/urls";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <img src={BANNER_IMAGE} className="banner-image" alt="Banner" />
      <div className="banner-text">
        <h2>Marten</h2>
        <h4>Eckerstrom</h4>
        <h5>Actor</h5>
      </div>
    </div>
  );
}

export default Banner;
