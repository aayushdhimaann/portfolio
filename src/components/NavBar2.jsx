import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resume from '../assets/Aayushcv.pdf'
const NavBar2 = (props) => {
  return (
    <nav id="navbar2">
      <ul>
        <li>
          <Link to="/" onClick={props.onClick}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={props.onClick}>About</Link>
        </li>
        <li>
          <Link to="/skills" onClick={props.onClick}>Skills</Link>
        </li>
        <li>
          <Link to="/education" onClick={props.onClick}>Education</Link>
        </li>
        
        <li>
          <Link to="/projects" onClick={props.onClick}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" onClick={props.onClick}>Contact</Link>
        </li>
        <li>
          <button id="resume-button">
            <a href={resume} download onClick={props.onClick}>
              Resume <FontAwesomeIcon icon={faDownload} />
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar2;
