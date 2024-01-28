import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MiniAbout = () => {
  return (
    <>
      <h1 className="abt">
        <Link to="/about">About <FontAwesomeIcon icon={faCircleUser}/></Link>
      </h1>
      <p id="abt-para">
        Passionate web developer with a flair for creating visually appealing
        and highly functional websites. Proficient in HTML, CSS, and JavaScript,
        I specialize in crafting responsive, user-friendly designs. With a keen
        eye for detail and a commitment to staying abreast of emerging trends, I
        bring a blend of creativity and technical expertise to every project.
        Dedicated to delivering seamless user experiences, I thrive on
        transforming ideas into innovative digital solutions. Let's collaborate
        to bring your web visions to life! <br /> for more info{" "}
        <Link to="/about">click here</Link>
      </p>
    </>
  );
};

export default MiniAbout;
