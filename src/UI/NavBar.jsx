import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload, faXmark } from "@fortawesome/free-solid-svg-icons";
import resume from "../assets/Aayushcv.pdf";
import NavBar2 from "./NavBar2";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navbarShowHandler = () => {
    setIsVisible(!isVisible);
  };
  const navigate = useNavigate();
  return (
    <nav id="navbar">
      <div
        className="left"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="" />
      </div>
      <div className="center">
        <ul>
          <motion.li
            // whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activ" : "")}
              end
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li
            // whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "activ" : "")}
            >
              About
            </NavLink>
          </motion.li>
          <motion.li
            // whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? "activ" : "")}
            >
              Skills
            </NavLink>
          </motion.li>

          <motion.li
            // whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "activ" : "")}
            >
              Projects
            </NavLink>
          </motion.li>
          <motion.li
            // whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            // whileFocus={{scale:0.8}}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "activ" : "")}
            >
              Contact
            </NavLink>
          </motion.li>
        </ul>
      </div>
      <div className="right">
        <motion.button
          // whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <a href={resume} download>
            Resume <FontAwesomeIcon icon={faDownload} />
          </a>
        </motion.button>
      </div>
      <div className="bars">
        <button onClick={navbarShowHandler}>
          {isVisible ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      {isVisible && <NavBar2 onClick={navbarShowHandler} />}
    </nav>
  );
};

export default NavBar;
