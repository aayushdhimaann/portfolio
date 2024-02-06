import React from "react";
import html from "../assets/html.png";
import SkillsDisplay2 from "./SkillsDisplay2";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/reactlogo.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mysql from "../assets/mysql.png";
import mongo from "../assets/mongo.png";
import github from "../assets/github.jpg";
import java from "../assets/java.png";
import c from "../assets/clan.png";
import word from "../assets/wordpress.png";
import Footer from "./Footer";
const Skills = () => {
  const skillsdata = [
    {
      id: "ss1",
      image: html,
      title: "HTML",
      desc: "HTML is used for structuring the webpage or website.",
    },
    {
      id: "ss2",
      image: css,
      title: "CSS",
      desc: "CSS is used for designing the website.",
    },
    {
      id: "ss3",
      image: js,
      title: "JAVASCRIPT",
      desc: "JAVASCRIPT is the brain of the website.",
    },
    {
      id: "ss5",
      image: react,
      title: "REACT JS",
      desc: "REACT JS is used to make SPA (Single Page Applications).",
    },
    {
      id: "ss4",
      image: node,
      title: "NODE JS",
      desc: "NODE JS is a JAVASCRIPT runtime environment.",
    },
    {
      id: "ss6",
      image: express,
      title: "EXPRESS JS",
      desc: "EXPRESS JS is a framework that is used to make REST API with NODEJS.",
    },
    {
      id: "ss7",
      image: mysql,
      title: "MYSQL",
      desc: "MYSQL is a Relational Database Management System.",
    },
    {
      id: "ss8",
      image: mongo,
      title: "MONGODB",
      desc: "MONGODB is a collection based database management system.",
    },
    {
      id: "ss9",
      image: github,
      title: "GITHUB",
      desc: "GITHUB is service where we can manage, share, store our codes.",
    },
    {
      id: "ss11",
      image: java,
      title: "JAVA",
      desc: "Java is a high-level, class-based, object-oriented programming language.",
    },
    {
      id: "ss10",
      image: c,
      title: "C LANGAUGE",
      desc: "C is a general-purpose computer programming language.",
    },
    {
      id: "ss12",
      image: word,
      title: "WORDPRESS",
      desc: "By using WORDPRESS we can make website without coding 😂.",
    },
  ];
  return (
    <>
      <div id="skills">
        <h1 className="skill-heading">Skills</h1>
        <div className="container">
          {skillsdata.map((item) => {
            return (
              <SkillsDisplay2
                key={item.id}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
