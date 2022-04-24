import React from "react";

const PhotoFruit = (props) => {
  return (
    <section className="photofruit">
      <div className="photofruit__container">
        <div className="photofruit__graphic">
          <h3>Graphic Design</h3>
          <p>
            Great design make you memorable. We deliver artwork that underscores
            your brand message and captures potential clients' attention.
          </p>
        </div>
        <div className="photofruit__photography">
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
