import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const PhotoFruit = (props) => {
  return (
    <section className="photofruit">
      <div className="photofruit__container">
        <div className="photofruit__graphic" data-aos="fade-right">
          <h3>Graphic Design</h3>
          <p>
            Great design make you memorable. We deliver artwork that underscores
            your brand message and captures potential clients' attention.
          </p>
        </div>
        <div className="photofruit__photography" data-aos="fade-left">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoFruit;
