import { css } from "emotion";
import { sectionGutter } from "./../../../stylesheets/variables";
const testimonial = css({
  backgroundColor: "white",
  h2: {
    marginBottom: 60
  },
  figure: {
    maxWidth: "400px",
    margin: "0 auto",
    position: "relative"
  },
  blockquote: {
    fontSize: " 1.2rem",
    fontWeight: 300,
    lineHeight: 1.6,
    color: "#292929",

    p: {
      margin: 0,
      marginBottom: 5,
      display: "inline-block",
      lineHeight: 1.8,
      color: "#797979",
      fontSize: "1.1rem"
    }
  },
  figcaption: {
    fontSize: "1rem",
    cursor: "pointer",

    a: {
      color: "#292929",
      textDecoration: "none",
      padding: "5px",
      backgroundColor: "#f9c80e",
      border: "1px solid #292929"
    }
  }
});

export default testimonial;
