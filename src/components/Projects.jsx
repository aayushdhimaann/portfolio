import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cal from "../assets/cal.png";
import food from "../assets/food.png";
import xypo from "../assets/xypo.png";
import challenge from "../assets/challenge.png";
import expense from "../assets/expense.png";
import uni from "../assets/uni.png";
import ProjectDisplay from "./ProjectDisplay";
import Footer from "./Footer";
const Projects = () => {
  const projectData = [
    {
      url: food,
      title: "FOOD APP",
      link: "https://react-food-app-ca610.web.app/",
      description:
        "This is a food order app made with react in frontend and in backend I used firebase realtime database for storing the data of users and orders.",
    },
    {
      url: cal,
      title: "CALCULATOR",
      link: "https://aayushdhimaann.github.io/calculator/",
      description:
        "This is simple calculator made with HTML,CSS and JAVASCRIPT for calculation and design. You can do any type of calculation using this calculator.",
    },
    {
      url: xypo,
      title: "XYPO WEBSITE",
      link: "https://aayushdhimaann.github.io/xypo/",
      description:
        "This is a static website made with HTML,CSS and JAVASCRIPT for practice purpose. This is a resposive website for all the screen sizes. The purpose of making this website is to enhancing the knowledge in how to create resposive websites.",
    },
    {
      url: challenge,
      title: "REACT CHALLENGES",
      link: "https://github.com/aayushdhimaann/react-challenges",
      description:
        "This webapp is made using React Js for enhancing the concepts of react and react-router. By this app you can add a challenge , delete a challenge and more.",
    },
    {
      url: expense,
      title: "EXPENSE TRACKER",
      link: "https://expense-tracker-aeaf5.web.app/",
      description:
        "This is my first ever React App. By using this app you can track your expense easily and you can filter your expenses too using the dropdown which have years for filtering the expenses.",
    },
    {
      url: uni,
      title: "UNIVERSITY MANAGEMENT",
      link: "https://github.com/aayushdhimaann/university-management-system",
      description:
        "This app is made with Java and Netbeans IDE for adding the data of student. We can view, add, update the data of students and teachers by this app. Frontend of this app is made with java swing and on the backend I used mysql database. ",
    },
  ];
  return (
    <>
      <div className="project-page">
        <h1 className="project-heading">
          Projects <FontAwesomeIcon icon={faCode} />
        </h1>
        {projectData.map((item) => (
          <ProjectDisplay
            key={item.url}
            url={item.url}
            title={item.title}
            link={item.link}
            description={item.description}
          />
        ))}
        <p className="info">
          by clicking on the image or on the title of the project you can
          checkout the output or the source code of the project that is already
          on my{" "}
          <a href="https://github.com/aayushdhimaann" target="_blank">
            github
          </a>
          &nbsp; profile.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
