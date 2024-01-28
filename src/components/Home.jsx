import React, { useRef, useEffect } from "react";
// import background from '../assets/background.jpg'
import background from "../assets/back.jpg";
import Icons from "./Icons";
import Typed from "typed.js";
import HireMeButton from "./HireMeButton";
import Me from "./Me";
import MiniAbout from "./MiniAbout";
import MiniSkills from "./MiniSkills";
import MiniEducation from "./MiniEducation";
const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["DESIGN", "BUILD"],
      typeSpeed: 100,
      loopCount: Infinity,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div id="main">
        <div className="hi mleft">
          <h1>Hi,</h1>
        </div>
        <div id="me">
          <Me />
        </div>
        <div className="waviy mleft text-center">
          <span>I'</span>
          <span>m</span>&nbsp;
          <span className="color-red">A</span>
          <span className="color-red">A</span>
          <span className="color-red">Y</span>
          <span className="color-red">U</span>
          <span className="color-red">S</span>
          <span className="color-red">H</span>&nbsp;
          <span className="color-red">D</span>
          <span className="color-red">H</span>
          <span className="color-red">I</span>
          <span className="color-red">M</span>
          <span className="color-red">A</span>
          <span className="color-red">N</span>
        </div>
        <div className="text-div">
          <p id="text" className="mleft text-center">
            I <span ref={el}></span> for the web
          </p>
        </div>
        <HireMeButton />
        <div className="social-icons">
          <Icons />
        </div>
      </div>
      <section id="second">
        <MiniAbout />
      </section>
      <section id="third">
        <MiniSkills />
      </section>
      <section id="education">
        <MiniEducation />
      </section>
    </>
  );
};

export default Home;
