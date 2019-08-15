import { css } from "emotion";
import { yellow } from "./../../../stylesheets/variables";

const navOpener = css({
  position: "fixed",
  cursor: "pointer",
  top: 15,
  right: 15,
  zIndex: 999,
  padding: "5px 12px",
  transition: "border .5s ease",
  "&:hover": {
    outline: "none",
    borderColor: yellow
  }
});

export default navOpener;
