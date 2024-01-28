import React from "react";
import { motion, stagger, useScroll, useTransform } from "framer-motion";
const MiniEducationDisplay = (props) => {
  const { scrollY } = useScroll();
  const opacityEducation = useTransform(
    scrollY,
    [1000, 1200, 1400, 1600, 1900, 2200, 2300],
    [0, 0.1, 0.3, 1, 1, 0.5, 0.2]
  );
  const yEducation = useTransform(
    scrollY,
    [1200, 1400, 1600, 1800, 2000, 2200, 2300],
    [-100, -50, -20, 0, -50, -80, -150]
  );
  // console.log(scrollY.current);
  return (
    <motion.div
      className="eduuu"
      style={{ opacity: opacityEducation, y: yEducation }}
      transition={{ type: "spring" }}
    >
      <h1>{props.name}</h1>
      <p className="edu-duration">{props.duration}</p>
      <p className="edu-specialization">{props.specialization}</p>
    </motion.div>
  );
};

export default MiniEducationDisplay;
