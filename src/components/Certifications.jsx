import React from "react";
import CertificationDisplay from "./CertificationDisplay";
import c from "../assets/clanguage.png";
import java from "../assets/java.jpg";
import java2 from "../assets/java2.png";
import boot from "../assets/boot.jpg";
import web from "../assets/web.png";
const Certifications = () => {
  const certificates = [
    {
      id: "c1",
      name: "Training in C language",
      description: "Name of the institution: It Skills",
      img: c,
      address: "Address: Muzaffarnagar, Uttar Pradesh",
      certificateNo: "1",
    },
    {
      id: "c2",
      name: "Training in Java",
      description: "Name of the institution: It Skills",
      img: java,
      address: "Address: Muzaffarnagar, Uttar Pradesh",
      certificateNo: "2",
    },
    {
      id: "c3",
      name: "Java Programming",
      description: "Name of the institution: Udemy",
      img: java2,
      address: "Instructors: CodeIn Academy",
      certificateNo: "UC-b701ff0e-9134-4696-9e75-b9d3457b42ca",
    },
    {
      id: "c4",
      name: "Bootstrap and jQuery",
      description: "Name of the institution: Udemy",
      img: boot,
      address: "Instructors: YouAccel Training",
      certificateNo: "UC-26a91cee-3200-4ffa-a869-c5e4467df2ca",
    },
    {
      id: "c5",
      name: "Training in Web Technology",
      description: "Name of the institution: It Skills",
      img: web,
      address: "Address: Muzaffarnagar, Uttar Pradesh",
      certificateNo: "3",
    },
  ];
  return (
    <div className="certifications">
      {certificates.map((item) => (
        <CertificationDisplay
          key={item.id}
          name={item.name}
          description={item.description}
          img={item.img}
          address={item.address}
          certificateNo={item.certificateNo}
        />
      ))}
    </div>
  );
};

export default Certifications;
