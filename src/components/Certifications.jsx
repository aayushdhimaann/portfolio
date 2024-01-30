import React from "react";
import CertificationDisplay from "./CertificationDisplay";

const Certifications = () => {
    const certificates=[
        {
            id:'c1',
            name:'Training in C language',
            description:'',
            
        }
    ]
  return (
    <div className="certifications">
      <CertificationDisplay />
      <CertificationDisplay />
      <CertificationDisplay />
      <CertificationDisplay />
      <CertificationDisplay />
    </div>
  );
};

export default Certifications;
