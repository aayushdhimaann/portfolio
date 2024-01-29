import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <section id="about">
        <h1 className="about-heading">
          About Me <FontAwesomeIcon icon={faCircleUser} />
        </h1>
        <p className="about-para">
          Here you will find more information about me, what I do, and mostly in
          terms <br /> of programming and technology.
        </p>
        <br />
        <h3>Get to know about me&nbsp;!</h3>
        <div className="about-container">
          <div className="about-img"></div>
          <div className="about-me"></div>
        </div>
      <Footer />
      </section>
    </>
  );
};

export default About;
