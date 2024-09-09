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
        Currently employed at Megamax Services, Noida, Uttar Pradesh
      </p>
      <p>
        as a Junior Software Engineer <br /> from Apr 2024.
      </p>
      <p>
        Creating functionalities in web 
        <br />
        using <strong>HTML, CSS, JavaScript, CodeIgniter, Laravel</strong>.
      </p>
      <p className="institute">
        Software Development Trainee at It Skills, Muzaffarnagar, Uttar Pradesh
      </p>
      <p>
        Mar 2023 - Feb 2024
      </p>
      <p>
        Developed responsive and user-friendly web applications utilizing <br /><strong>HTML, CSS, JavaScript, and React.js</strong>.
      </p>
      <p>
        Possess foundational knowledge in <strong>C</strong> and <strong>Java</strong> programming languages.
      </p>
    </motion.div>
  );
};

export default Experience;
