import React from "react";

const Fruits = (props) => {
  const styles = {
    flexDirection: props.direction,
  };

  return (
    <div className="fruits__row" style={styles}>
      <div className="fruits__text">
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
