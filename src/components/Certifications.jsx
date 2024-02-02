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
      description: "Name of the institution: It Skills Institute Muzaffarnagar",
      img: c,
    },
    {
      id: "c2",
      name: "Training in Java",
      description: "Training in Java language",
      img: java,
    },
    {
      id: "c3",
      name: "Java Programming",
      description: "Java Programming: Complete Beginner to Advanced",
      img: java2,
    },
    {
      id: "c4",
      name: "Bootstrap and jQuery",
      description: "Complete course for beginners",
      img: boot,
    },
    {
      id: "c5",
      name: "Training in Web Technology",
      description: "Training in web technology",
      img: web,
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
        />
      ))}
    </div>
  );
};

export default Certifications;
