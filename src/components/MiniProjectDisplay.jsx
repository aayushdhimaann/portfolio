import React from "react";

const MiniProjectDisplay = ({ image, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="proj-img">
        <img src={image} alt="" />
      </div>
    </a>
  );
};

export default MiniProjectDisplay;
