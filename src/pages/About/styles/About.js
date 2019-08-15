import { css } from "emotion";
import { yellow, black } from "stylesheets/variables";
const about = css({
  header: {
    padding: "150px",

    h1: {
      backgroundColor: yellow,
      display: "inline-block",
      marginBottom: 30,
      fontWeight: 700,
      fontSize: "3rem"
    }
  },
  ".card": {
    border: `none`,
    marginBottom: 30
  },
  img: {
    width: "100%",
    minHeight: 300
  },
  ".section-about__images": {
    backgroundColor: "white",
    padding: 80
  }
});

export default about;
