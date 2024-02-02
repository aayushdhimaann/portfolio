import React from "react";
import demo from "../assets/back.jpg";
const CertificationDisplay = ({ name, description, img }) => {
  return (
    <div className="certificate">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CertificationDisplay;
