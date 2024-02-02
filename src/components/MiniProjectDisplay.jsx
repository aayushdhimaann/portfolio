import React from "react";

const MiniProjectDisplay = ({ image, link, alt }) => {
  return (
    <a href={link} target="_blank">
      <div className="proj-img">
        <img src={image} alt={alt} />
      </div>
    </a>
  );
};

export default MiniProjectDisplay;
