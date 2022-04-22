import React from "react";
import hero from "../images/desktop/image-header.png";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1 className="hero__text">We are Creatives</h1>
      </div>
      <img className="hero__img" src={hero} alt="Hero" />
    </div>
  );
};

export default Hero;
