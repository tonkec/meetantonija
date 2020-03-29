import { css } from "emotion";
import { sectionGutter } from "./../../../stylesheets/variables";

const skillsSection = css({
  backgroundColor: "white",

  ".skills-column": {
    maxWidth: "400px"
  },

  ".skills-heading": {
    color: "#444",
    textTransform: "uppercase",
    fontWeight: 500,
    marginBottom: 20
  },

  ".skills-description": {
    fontWeight: 200,
    fontFamily: '"Raleway", sans-serif',
    margin: 0,
    fontSize: "1rem",
    lineHeight: 2.2,
    color: "#797979",

    span: {
      padding: "3px 7px",
      fontFamily: '"Rubik", sans-serif',
      backgroundColor: "#f9c80e",
      border: "1px solid #292929",
      color: "#292929"
    }
  }
});

export default skillsSection;
