import React from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

const AboutUs = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <section id="about">
        <h2>About Us</h2>
        <p>Placeholder text about your company.</p>
        {/* Add images and more content as needed */}
      </section>
    </CSSTransition>
  );
};

export default AboutUs;
