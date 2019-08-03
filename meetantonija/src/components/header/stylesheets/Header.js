import { css } from "emotion";
import { headerBg } from "../../../stylesheets/variables";

const header = css({
  backgroundColor: headerBg,
  padding: "300px 100px",

  ".header__heading": {
    fontWeight: 300,
    fontFamily: "Raleway, sans-serif",
    maxWidth: "1000px"
  },

  b: {
    fontSize: "3.5rem",
    fontFamily: "Rubik, sans-serif",
    fontWeight: 700
  }
});

export { header };
