import { css } from "emotion";
import { white1 } from "stylesheets/variables";

let portfolioTopGutter = "80";

const portfolioItem = css({
  ".section-portfolio": {
    "&__header": {
      padding: "15vh 0",
      color: white1
    },

    "&__title": {
      fontSize: "4rem",
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
      padding: `${portfolioTopGutter}px`,
      dt: {
        fontSize: "1.2rem",
        marginBottom: 20
      },
      dd: {
        fontSize: "100%",
        lineHeight: 1.8,
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
      fontSize: "1rem",
      lineHeight: 2,
      marginBottom: 40
    },

    "&__links": {
      backgroundColor: white1,
      padding: `${portfolioTopGutter}px`
    }
  }
});

export default portfolioItem;
