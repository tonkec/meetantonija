import { css } from "emotion";
import { yellow, black } from "../../../stylesheets/variables";
const footerList = css({
  padding: 0,
  textTransform: "uppercase",

  a: {
    textDecoration: "none",
    fontSize: ".9rem",
    fontWeight: 400,
    display: "inline-block",
    position: "relative",
    marginBottom: 7,
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    zIndex: 1,
    color: "white",
    fontFamily: "Roboto, sans-serif",

    "&:hover": {
      color: black,
      backgroundColor: yellow
    },

    "&::before": {
      content: '""',
      width: "100%",
      height: 3,
      backgroundColor: yellow,
      bottom: 0,
      position: "absolute"
    }
  }
});

export default footerList;
