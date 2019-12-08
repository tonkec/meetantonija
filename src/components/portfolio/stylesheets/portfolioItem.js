import { css } from "emotion";
import { white1 } from "./../../../stylesheets/variables";

let portfolioTopGutter = "80";

const portfolioItem = css({
  img: { width: "100%", borderRadius: 7 },

  ".section-portfolio": {
    "&__header": {
      padding: "15vh 0",
      color: white1
    },

    "&__title": {
      marginBottom: 50,
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: "Roboto, sans-serif"
    },
    "&__data": {
      padding: `${portfolioTopGutter - 20}px`,
      backgroundColor: white1
    },

    "&__about": {
      backgroundColor: "#ffffff",
      padding: `${portfolioTopGutter}px`,
      dt: {
        fontSize: "1.2rem",
        marginBottom: 20
      },
      dd: {
        fontSize: "1rem",
        lineHeight: 2,
        paddingLeft: 20,
        marginBottom: 40
      }
    },

    "&__subtitle": {
      marginBottom: 20,
      marginTop: 20,
      fontWeight: 700
    },

    "&__description": {
      fontSize: "1.1rem",
      lineHeight: 2,
      marginBottom: 40
    },

    "&__links": {
      backgroundColor: white1,
      padding: `${portfolioTopGutter}px`
    },

    "&__images": {
      padding: `${portfolioTopGutter}px`,
      "&--craftstrom": {
        img: {
          width: 300
        }
      }
    }
  }
});

export default portfolioItem;
