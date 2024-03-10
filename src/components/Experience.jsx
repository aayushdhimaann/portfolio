import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div id="exp">
      <h1 id="exp-heading">
        Work <FontAwesomeIcon icon={faBriefcase} />
      </h1>
      <p className="institute">
        Currently working at It Skills, Muzaffarnagar, Uttar Pradesh
      </p>
      <p>
        as a Web Developer <br /> from Mar 2023
      </p>
      <p>
        With all my experience and skills I create responsive and effective
        <br />
        user-friendly designs using <b>HTML, CSS, JavaScript, React Js.</b>
      </p>
      <p>
        I also know the fundamentals of <b>C</b> and <b>Java</b> programming
        languages.
      </p>
    </motion.div>
  );
};

export default Experience;
