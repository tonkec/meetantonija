import { css } from "emotion";
import { yellow, brown } from "stylesheets/variables";
const nav = css({
  "&.navigation__inner": {
    height: "100%",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 99,

    "&--left": {
      backgroundColor: yellow,
      transition: "transform 0.5s cubic-bezier(.42,0,.58,1) 0.3s",
      transform: "translateY(-150%)",
      "&.show": {
        transform: "translateY(0)"
      }
    },
    "&--right": {
      backgroundColor: brown,
      transition: "transform 0.5s cubic-bezier(.42,0,.58,1)",
      right: 0,
      left: "auto",
      transform: "translateX(150%)",
      "&.show": {
        transform: "translateX(0)"
      },
      a: {
        "&:hover": {
          borderColor: yellow
        }
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
