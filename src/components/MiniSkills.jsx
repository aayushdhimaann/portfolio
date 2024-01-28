import React from "react";
import {
  faBootstrap,
  faCodepen,
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
import SkillsDisplay from "./SkillsDisplay";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MiniSkills = () => {
  const skills = [
    {
      id: "s1",
      name: "HTML",
      icon: faHtml5,
    },
    {
      id: "s2",
      name: "CSS",
      icon: faCss3,
    },
    {
      id: "s3",
      name: "JAVASCRIPT",
      icon: faJs,
    },
    {
      id: "s4",
      name: "REACT",
      icon: faReact,
    },
    {
      id: "s5",
      name: "NODE JS",
      icon: faNodeJs,
    },
    {
      id: "s6",
      name: "JAVA",
      icon: faJava,
    },
    {
      id: "s7",
      name: "C LANGUAGE",
      icon: faC,
    },
    {
      id: "s8",
      name: "BOOTSTRAP",
      icon: faBootstrap,
    },
  ];
  return (
    <>
      <h1 className="skl">
        <Link to="/skills">Skills <FontAwesomeIcon icon={faCodepen}/></Link>
      </h1>
      <div className="skills">
        {skills.map((item) => {
          return (
            <SkillsDisplay key={item.id} icon={item.icon} name={item.name} />
          );
        })}
      </div>
    </>
  );
};

export default MiniSkills;
