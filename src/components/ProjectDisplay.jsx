import React from "react";
import { motion } from "framer-motion";
const ProjectDisplay = (props) => {
  return (
    <div className="project-section">
      <div className="project-image">
        <a href={props.link} target="_blank">
          <img src={props.url} alt={props.title} />
        </a>
      </div>
      <div className="project-description">
        <a href={props.link} target="_blank">
          <motion.h1
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {props.title}
          </motion.h1>
        </a>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectDisplay;
