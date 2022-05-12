import logo from "../images/logo.svg";
import React from "react";
import Nav from "../components/Nav";

const Soon = () => {
  return (
    <>
      <Nav />
      <div className="soon">
        <img className="soon__img" src={logo} alt="Logo " />
        <h2 className="soon__title">Coming Soon !</h2>
      </div>
    </>
  );
};

export default Soon;
