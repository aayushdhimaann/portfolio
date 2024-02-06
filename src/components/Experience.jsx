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
      <p>
        With all my experience and skills I teach how to create responsive and
        effective
        <br />
        user-friendly designs using <b>HTML, CSS, JavaScript, React Js.</b>
      </p>
      <p>
        I teach fundamentals of <b>C</b> and <b>Java</b> programming languages.
      </p>
    </div>
  );
};

export default Experience;
