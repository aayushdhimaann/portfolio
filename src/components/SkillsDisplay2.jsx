import React from "react";
import { motion } from "framer-motion";
const SkillsDisplay2 = (props) => {
  return (
    <motion.div
      className="skillsdisplay"
      whileHover={{ scale: 1.05, translateY: -10 }}
      transition={{ type: "spring", stiffness: 500 }}
    >
      <img src={props.image} alt="" />
      <h1 className="skill-title">{props.title}</h1>
      <p>{props.desc}</p>
    </motion.div>
  );
};

export default SkillsDisplay2;
