import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Experience = () => {
  return (
    <div id="exp">
      <h1 id="exp-heading">
        Work <FontAwesomeIcon icon={faBriefcase} />
      </h1>
      <p className="institute">
        Currently working at It Skills, Muzaffarnagar, Uttar Pradesh
      </p>
      <p>
        as a Freelancer Teacher <br /> from Mar 2023
      </p>
      {/* <p>
        I have honed my expertise in HTML, CSS, JavaScript, React, <br />{" "}
        allowing me to create responsive and user-centric websites and <br />
        applications and I Have Java Proficiency, C Language Mastery.
      </p> */}
    </div>
  );
};

export default Experience;
