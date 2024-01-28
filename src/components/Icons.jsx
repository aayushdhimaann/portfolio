import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const Icons = () => {
  return (
    <>
      <motion.div
        className="icon"
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Link to="mailto:aayush70dhiman@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </motion.div>
      <motion.div
        className="icon"
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Link to="https://github.com/aayushdhimaann" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </motion.div>
      <motion.div
        className="icon"
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Link to="https://www.linkedin.com/in/aayushdhimaan/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </motion.div>

      <motion.div
        className="icon"
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Link to="https://www.facebook.com/aayushdhimaann" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </motion.div>
      <motion.div
        className="icon"
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Link to="https://wa.me/qr/M46SCYHPNDW5H1" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
      </motion.div>

      <motion.div
        className="icon"
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Link to="https://www.instagram.com/__kanhaiyaa/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </motion.div>
      <motion.div
        className="icon"
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Link to="tel:+919416947392" target="_blank">
          <FontAwesomeIcon icon={faPhone} />
        </Link>
      </motion.div>
    </>
  );
};

export default Icons;
