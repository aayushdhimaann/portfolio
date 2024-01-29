import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MiniEducationDisplay from "./MiniEducationDisplay";
import { Link } from "react-router-dom";

const MiniEducation = () => {
  const education = [
    {
      id: "e1",
      name: "Bachelor of Computer Applications",
      duration: "2021-Present",
      specialization: "Computer Applications or Computer Science",
    },
    {
      id: "e2",
      name: "Intermediate",
      duration: "2018-2020",
    },
    {
      id: "e3",
      name: "High School",
      duration: "2016-2018",
    },
  ];
  return (
    <>
      <h1 className="edu">
        <Link to="/education">
          Education <FontAwesomeIcon icon={faGraduationCap} />
        </Link>
      </h1>
      <div className="edu-list">
        {education.map((item) => (
          <MiniEducationDisplay
            key={item.id}
            name={item.name}
            duration={item.duration}
            specialization={item.specialization}
          />
        ))}
      </div>
    </>
  );
};

export default MiniEducation;
