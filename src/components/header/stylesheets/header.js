import { css } from "emotion";
import { headerBg } from "../../../stylesheets/variables";

const header = css({
  backgroundColor: headerBg,
  position: "relative",

  ".header__heading": {
    fontWeight: 300,
    fontFamily: "Raleway, sans-serif"
  },

  b: {
    fontFamily: "Rubik, sans-serif",
    fontWeight: 700
  }
});

export { header };
