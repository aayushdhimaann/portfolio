import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
const MiniContact = () => {
  const navigate = useNavigate();
  const contactHandler = () => {
    navigate("/contact");
  };
  return (
    <div>
      <motion.button
        id="contact-btn"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        onClick={contactHandler}
      >
        Contact Me &nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faArrowRight} />
      </motion.button>
    </div>
  );
};

export default MiniContact;
