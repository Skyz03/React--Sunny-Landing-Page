import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Fruits from "./components/Fruits.jsx";
import PhotoFruit from "./components/PhotoFruit.jsx";
import Testimonial from "./components/Testimonials.jsx";
import Pictures from "./components/Pictures.jsx";
import Footer from "./components/Footer";

import Fruit1 from "./images/desktop/image-transform.jpg";
import Fruit2 from "./images/desktop/image-stand-out.jpg";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Soon from "./pages/Soon";
import Loader from "./components/Loader";

function App() {
  const [done, setDone] = React.useState(undefined);

  window.addEventListener("load", () => {
    setDone(true);
  });

  const content1 =
    "We are a full-service creative agency specilalizing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.";
  const content2 =
    "Using a collaborative formula of designers, researchers, photographer, videographers, and copywriters, we'll build and extend your brand in digital places.";

  return (
    <>
      {!done ? (
        <Loader color="#3ebfff" type="cubes" />
      ) : (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Soon />} />
              <Route
                path="/"
                element={
                  <>
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
                    <PhotoFruit />
                    <Testimonial />
                    <Pictures />
                  </>
                }
              />
              <Route
                path="contact"
                element={
                  <>
                    <Nav />
                    <Contact />
                  </>
                }
              />
            </Routes>
          </BrowserRouter>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
