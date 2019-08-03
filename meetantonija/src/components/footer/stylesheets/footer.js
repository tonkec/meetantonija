import { css } from "emotion";
import { footerBg } from "../../../stylesheets/variables";

const footer = css({
  backgroundColor: footerBg,
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 40,
  textAlign: "left",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: -1
});

export default footer;
