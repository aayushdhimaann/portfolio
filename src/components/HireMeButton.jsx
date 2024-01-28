import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const HireMeButton = () => {
  return (
    <a href="mailto:aayush70dhiman@gmail.com">
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        className="hirebtn"
      >
        Hire&nbsp;Me <FontAwesomeIcon icon={faEnvelope} />
      </motion.button>
    </a>
  );
};

export default HireMeButton;
