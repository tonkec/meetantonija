import React from "react";
import Grid from "components/Grid";
import skillsSection from "./stylesheets/skillsSection";
const SkillsSection = () => (
  <section className={skillsSection}>
    <Grid container="container-fluid">
      <div className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-4 offset-xl-0">
        <div className="skills-column">
          <h2 className="skills-heading is-uppercase has-text-weight-bold">
            Skills
          </h2>
          <p className="skills-description">
            In my career I have solved many problems with HTML,
            <span>CSS</span>, Bootstrap, Bulma, Js, <span>React.js</span> and
            Figma
          </p>
        </div>
      </div>

      <div className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-4 offset-xl-0">
        <div className="skills-column">
          <h2 className="skills-heading is-uppercase has-text-weight-bold">
            Mentoring
          </h2>
          <p className="skills-description">
            I have helped plenty of students with their projects. We
            <span> debugged</span> together, researched many issues, looked for{" "}
            <span> answers</span>, read the docs and solved many problems
            together
          </p>
        </div>
      </div>

      <div className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-4 offset-xl-0">
        <div className="skills-column">
          <h2 className="skills-heading is-uppercase has-text-weight-bold">
            Tools
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
