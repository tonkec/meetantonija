import React from "react";
import Grid from "./../../components/Grid";
import skillsSection from "./stylesheets/skillsSection";
import {
  faVial,
  faGraduationCap,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./stylesheets/skills.scss";

const SkillsSection = () => (
  <section className={`${skillsSection} skills-section`}>
    <Grid container="container-fluid">
      <div className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-4 offset-xl-0">
        <div className="skills-column">
          <h2 className="skills-heading has-text-weight-bold">
            <FontAwesomeIcon icon={faVial} className="fa-icon" /> Skills
          </h2>
          <p className="skills-description">
            In my career I have solved many problems with HTML,&nbsp;
            <span>CSS</span>, Bootstrap, Js, React Native, <span>React.js</span>
            , <span>Angular</span> and Figma
          </p>
        </div>
      </div>

      <div className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-4 offset-xl-0">
        <div className="skills-column">
          <h2 className="skills-heading has-text-weight-bold">
            <FontAwesomeIcon icon={faGraduationCap} className="fa-icon" />{" "}
            Mentoring
          </h2>
          <p className="skills-description">
            I have helped plenty of students with their projects. We&nbsp;
            <span>debugged</span> together, researched many issues, looked
            for&nbsp;
            <span>answers</span>, read the docs and solved many problems
            together
          </p>
        </div>
      </div>

      <div className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-4 offset-xl-0">
        <div className="skills-column">
          <h2 className="skills-heading has-text-weight-bold">
            <FontAwesomeIcon icon={faLaptopCode} className="fa-icon" /> Tools
          </h2>
          <p className="skills-description">
            My <span>workflow</span> is enhanced with Webpack, Gulp, Jira,
            Trello, npm and yarn packages. I like to keep dependecies as{" "}
            <span> light</span> as possible
          </p>
        </div>
      </div>
    </Grid>
  </section>
);

export default SkillsSection;
