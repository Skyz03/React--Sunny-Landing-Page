import React from "react";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <h2>sunnyside</h2>

        <div className="footer__links">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
