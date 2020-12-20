import { css } from "@emotion/css";
import { yellow } from "./../../../stylesheets/variables";
const about = css({
  header: {
    h1: {
      backgroundColor: yellow,
      display: "inline-block",
      marginBottom: 15,
      fontWeight: 700,
      fontSize: "3rem",
    },
  },

  img: {
    width: "100%",
    minHeight: 300,
  },
  ".section-about__images": {
    backgroundColor: "white",
    padding: "80px 15px",
  },
});

export default about;
