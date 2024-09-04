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
        using <b>HTML, CSS, JavaScript, CodeIgniter, Laravel.</b>
      </p>
    <hr>
     <p className="institute">
    Software Development Trainee at It Skills, Muzaffarnagar, Uttar Pradesh
    </p>
    <p>
        Mar 2023 - Feb 2024
    </p>
    <p>
        Developed responsive and user-friendly web applications utilizing <br/><b>HTML, CSS, JavaScript, and React.js</b>.
    </p>
    <p>
        Possess foundational knowledge in <b>C</b> and <b>Java</b> programming languages.
    </p>
    </motion.div>
  );
};

export default Experience;
