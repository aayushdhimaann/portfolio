import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <footer>
        <p>Aayush Dhiman</p>
        <p>
          <FontAwesomeIcon icon={faCopyright} /> Copyright @2024 all right
          reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
