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
      school: "from J.P Institue of Education and Applied Sciences",
    },
    {
      id: "e2",
      name: "Intermediate",
      duration: "2018-2020",
      school: "from SDS School",
    },
    {
      id: "e3",
      name: "High School",
      duration: "2016-2018",
      school: "from St.R.C Convent School",
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
            school={item.school}
          />
        ))}
      </div>
    </>
  );
};

export default MiniEducation;
