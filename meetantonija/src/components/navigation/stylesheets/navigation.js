import { css } from "emotion";
import { yellow, brown } from "stylesheets/variables";
const nav = css({
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,

  "&.show": {
    zIndex: 99
  },
  ".navigation__inner": {
    float: "left",
    height: "100%",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "&--left": {
      backgroundColor: yellow,
      transform: "translateY(-100%)",
      transition: "transform 0.5s cubic-bezier(.42,0,.58,1) 0.3s",
      "&.show": {
        transform: "translateY(0)"
      }
    },
    "&--right": {
      backgroundColor: brown,
      transform: "translateX(150%)",
      transition: "transform 0.5s cubic-bezier(.42,0,.58,1)",
      "&.show": {
        transform: "translateX(0)"
      }
    }
  },

  ".navigation__list": {
    width: "50%",
    padding: 0,
    textAlign: "center",
    li: {
      margin: "15px 0",
      display: "inline-block"
    }
  }
});

export default nav;
