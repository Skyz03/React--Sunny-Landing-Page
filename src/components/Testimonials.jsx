import React from "react";
import Container from "@mui/material/Container";
import card1 from "../images/image-emily.jpg";
import card2 from "../images/image-jennie.jpg";
import card3 from "../images/image-thomas.jpg";

const Testimonials = (props) => {
  return (
    <Container>
      <div className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header">
            <h3>Client Testimonials</h3>
          </div>

          <div className="testimonials__text">
            <div className="testimonials__card">
              <img className="testimonials__avatar" src={card1} alt="" />
              <p className="testimonials__review">
                We put our trust in Sunnyside and they delivered , making sure
                our needs were met and deadlines were always hit.
              </p>

              <h4>Emily R.</h4>
              <p className="testimonials__pos">Marketing Director</p>
            </div>

            <div className="testimonials__card">
              <img className="testimonials__avatar" src={card3} alt="" />
              <p className="testimonials__review">
                Sunnyside's enthusiasm coupled with their keen interest in our
                brand's success made it a satisfying and enjoyable experience.
              </p>

              <h4>Thomas S.</h4>
              <p className="testimonials__pos">Marketing Director</p>
            </div>

            <div className="testimonials__card">
              <img className="testimonials__avatar" src={card2} alt="" />
              <p className="testimonials__review">
                Incredible and result! Our sales increased over 400% when we
                worked with Sunnyside Highly recommended!
              </p>

              <h4>Jennie F.</h4>
              <p className="testimonials__pos">Marketing Director</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
