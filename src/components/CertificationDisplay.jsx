import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
const CertificationDisplay = ({
  name,
  description,
  img,
  address,
  certificateNo,
}) => {
  const [showCertificate, setShowCertificate] = useState(false);
  return (
    <div className="certificate">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{address}</p>
      <p
        className="certino"
        onClick={() => {
          setShowCertificate(!showCertificate);
        }}
      >
        Certificate Number{" "}
        <span>
          {showCertificate ? (
            <FontAwesomeIcon icon={faCaretDown} />
          ) : (
            <FontAwesomeIcon icon={faCaretUp} />
          )}
        </span>
      </p>
      <AnimatePresence>
        {showCertificate && (
          <motion.p
            initial={{ opacity: 0, scale: 0.5, x: -500 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
          >
            {certificateNo}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificationDisplay;
