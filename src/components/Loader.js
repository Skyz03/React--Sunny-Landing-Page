import React from "react";
import ReactLoading from "react-loading";

const Loader = ({ type, color }) => (
  <ReactLoading
    className="loader"
    type={type}
    color={color}
    height={100}
    width={200}
  />
);

export default Loader;
