import React from "react";
import pic1 from "../images/desktop/image-gallery-milkbottles.jpg";
import pic2 from "../images/desktop/image-gallery-orange.jpg";
import pic3 from "../images/desktop/image-gallery-cone.jpg";
import pic4 from "../images/desktop/image-gallery-sugarcubes.jpg";

const Pictures = () => {
  return (
    <section className="pictures">
      <div>
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
      </div>
      <div>
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </div>
    </section>
  );
};

export default Pictures;
