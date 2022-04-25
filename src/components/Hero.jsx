import React from "react";
import hero from "../images/desktop/image-header.png";
import ArrowDown from "../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1 className="hero__text">We are Creatives</h1>
      </div>

      <img className="arrow-down" src={ArrowDown} alt="arrow-down" />
      <img className="hero__img" src={hero} alt="Hero" />
    </div>
  );
};

export default Hero;
