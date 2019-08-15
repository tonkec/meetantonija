import { css } from "emotion";

const button = css({
  color: "#292929",
  backgroundColor: "#f9c80e",
  border: "2px solid black",
  fontWeight: 900,
  textTransform: "uppercase",
  fontSize: "1.5rem",
  padding: "10px",
  margin: "0 10px",
  fontFamily: "Roboto, sans-serif",
  transition:
    "background-color .2s cubic-bezier(.51,.76,.6,.42), color .2s cubic-bezier(.51,.76,.6,.42)",

  "&:hover": {
    textDecoration: "none",
    backgroundColor: "#292929",
    color: "#f9c80e"
  }
});

export default button;
