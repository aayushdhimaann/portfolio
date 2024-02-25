import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactDisplay = (props) => {
  return (
    <div className="address-sub-container">
      <div className="address-icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="address-data">
        <p>
          <span>{props.title} </span>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ContactDisplay;
