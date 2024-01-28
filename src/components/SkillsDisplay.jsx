import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
const SkillsDisplay = (props) => {
  return (
    <motion.div
      className="skills-home"
      whileHover={{ scale: 1.1, translateY: -10 }}
      transition={{ type: "spring", stiffness: 500 }}
    >
      <span className="skill-icon">
        <FontAwesomeIcon icon={props.icon} />
      </span>
      &nbsp;&nbsp;
      <span className="skill-name">{props.name}</span>
    </motion.div>
  );
};

export default SkillsDisplay;
