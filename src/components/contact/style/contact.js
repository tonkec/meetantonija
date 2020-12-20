import { css } from "@emotion/css";
import { white1 } from "./../../../stylesheets/variables";

const contact = css({
  "&.section__contact": {
    padding: "120px 0 120px",
    backgroundColor: white1,

    input: {
      backgroundColor: "transparent",
      boxShadow: "none",
      border: "none",
      borderRadius: 0,
      padding: 0,
      borderBottom: "1.5px solid #5d5d5d",
      color: "#292929",
      zIndex: 2,
      width: "100%",
      fontSize: "1rem",
      resize: "none",
      paddingBottom: 10,
      transition: "border-bottom 0.2s ease-in-out",
      marginBottom: 70,

      "&:focus": {
        borderBottom: "1.5px solid #000",
        boxShadow: "none",
        outline: "none",
      },
    },

    textarea: {
      backgroundColor: "transparent",
      boxShadow: "none",
      border: "none",
      borderRadius: 0,
      padding: 0,
      borderBottom: "1.5px solid #5d5d5d",
      color: "#292929",
      zIndex: 2,
      width: "100%",
      fontSize: "1rem",
      resize: "none",
      paddingBottom: 10,
      transition: "border-bottom 0.2s ease-in-out",

      "&:focus": {
        borderBottom: "1.5px solid #000",
        boxShadow: "none",
        outline: "none",
      },
    },

    button: {
      width: 150,
      backgroundColor: "#f9c80e",
      padding: "5px 0",
      color: "#000",
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      marginTop: 10,
      cursor: "pointer",
      borderRadius: 3,
      border: "2px solid #000",
    },
  },
});

export default contact;
