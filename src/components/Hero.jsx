import React from "react";
import hero from "../images/desktop/image-header.png";
import ArrowDown from "../images/icon-arrow-down.svg";
import fruits from "./Fruits";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1 className="hero__text">We are Creatives</h1>
      </div>
      <Link
        to={{
          hash: "fruits",
        }}
        onClick="#fruits"
      >
        {" "}
        <img className="arrow-down" src={ArrowDown} alt="arrow-down" />
      </Link>
      <img className="hero__img" src={hero} alt="Hero" />
    </div>
  );
};

export default Hero;
