import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Fruits from "./components/Fruits.jsx";

import Fruit1 from "./images/desktop/image-transform.jpg";
import Fruit2 from "./images/desktop/image-stand-out.jpg";

function App() {
  const content1 =
    "We are a full-service creative agency specilalizing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.";
  const content2 =
    "Using a collaborative formula of designers, researchers, photographer, videographers, and copywriters, we'll build and extend your brand in digital places.";

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Fruits
        heading="Transform your brand"
        content={content1}
        img={Fruit1}
        direction="row"
      />
      <Fruits
        heading="Stand out to the right audience"
        content={content2}
        img={Fruit2}
        direction="row-reverse"
      />
    </div>
  );
}

export default App;
