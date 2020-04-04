import { css } from "emotion";
import { yellow } from "./../../../stylesheets/variables";
const about = css({
  header: {
    padding: "160px 15px",

    h1: {
      backgroundColor: yellow,
      display: "inline-block",
      marginBottom: 15,
      fontWeight: 700,
      fontSize: "3rem"
    }
  },

  img: {
    width: "100%",
    minHeight: 300
  },
  ".section-about__images": {
    backgroundColor: "white",
    padding: "80px 15px"
  }
});

export default about;
