import { faCertificate, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "./Footer";
import aboutme from "../assets/about-me.jpg";
import Certifications from "./Certifications";
import Experience from "./Experience";
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
        <h3>Get to know me&nbsp;!</h3>
        <div className="about-container">
          <div className="about-img">
            <img src={aboutme} alt="my image" />
          </div>
          <div className="about-me">
            <p>
              I'm a <b>Frontend Web Developer</b> building the Front-end of
              Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the <b>Projects</b>{" "}
              section. <br />
              <br /> I also like sharing content related to the stuff that I
              have learned over the years in <b>Web Development</b> so it can
              help other people of the Dev Community. Feel free to Connect or
              Follow me on my{" "}
              <a
                href="https://www.linkedin.com/in/aayushdhimaan/"
                target="_blank"
              >
                Linkedin
              </a>
              &nbsp; where I post useful content related to Web Development and
              Programming I'm open to Job opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to <b>contact</b> me.
            </p>
          </div>
        </div>
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="about2">
        <h1 className="about-heading">
          Certifications <FontAwesomeIcon icon={faCertificate} />
        </h1>
        <Certifications />
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default About;
