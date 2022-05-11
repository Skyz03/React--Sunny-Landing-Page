import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Fruits = (props) => {
  const styles = {
    flexDirection: props.direction,
  };

  return (
    <div id="fruits" className="fruits__row" style={styles}>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="fruits__text"
      >
        <h3>{props.heading}</h3>
        <p>{props.content}</p>

        <button className="fruits__button">Learn More</button>
      </div>

      <div className="fruits__img">
        <img src={props.img} alt="img" />
      </div>
    </div>
  );
};
export default Fruits;
