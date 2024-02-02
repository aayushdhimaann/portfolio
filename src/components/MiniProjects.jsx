import { faFaceGrinWide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MiniProjectDisplay from "./MiniProjectDisplay";
import cal from "../assets/cal.png";
import challenge from "../assets/challenge.png";
import expense from "../assets/expense.png";
import food from "../assets/food.png";
import uni from "../assets/uni.png";
import xypo from "../assets/xypo.png";

const MiniProjects = () => {
  const projects = [
    {
      id: "p1",
      image: cal,
      link: "https://aayushdhimaann.github.io/calculator/",
      alt: "calculator",
    },
    {
      id: "p2",
      image: challenge,
      link: "https://github.com/aayushdhimaann/react-challenges",
      alt: "react challenges",
    },
    {
      id: "p3",
      image: expense,
      link: "https://expense-tracker-aeaf5.web.app/",
      alt: "expense tracker",
    },
    {
      id: "p4",
      image: food,
      link: "https://github.com/aayushdhimaann/food-app",
      alt: "food app",
    },
    {
      id: "p5",
      image: uni,
      link: "https://github.com/aayushdhimaann/university-management-system",
      alt: "university management system",
    },
    {
      id: "p6",
      image: xypo,
      link: "https://aayushdhimaann.github.io/xypo/",
      alt: "xypo",
    },
  ];
  return (
    <div>
      <h1 id="proj">
        <Link>
          Projects <FontAwesomeIcon icon={faFaceGrinWide} />
        </Link>
      </h1>
      <div className="proj-images">
        {projects.map((item) => (
          <MiniProjectDisplay
            key={item.id}
            image={item.image}
            link={item.link}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniProjects;
