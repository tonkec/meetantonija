import { css } from "emotion";
import { yellow } from "./../../../stylesheets/variables";
import code_institute from "./../../../images/about/code_institute_students_small.jpg";
import punk from "./../../../images/about/footer_guitar.jpg";
import scss from "./../../../images/about/beer.jpg";
import workshop from "./../../../images/about/workshop.jpg";
import zero from "./../../../images/about/from_zero.jpg";
import vienna from "./../../../images/about/css_in_vienna.jpg";

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
  ".card": {
    marginBottom: 30,
    borderRadius: 7,
    border: `5px solid #222`,

    "&__image": {
      height: 300,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      "&.top": {
        backgroundPosition: "top"
      },

      "&.scss": {
        backgroundImage: `url(${scss})`
      },

      "&.vienna": {
        backgroundImage: `url(${vienna})`
      },

      "&.ci": {
        backgroundImage: `url(${code_institute})`
      },
      "&.punk": {
        backgroundImage: `url(${punk})`
      },
      "&.workshop": {
        backgroundImage: `url(${workshop})`
      },
      "&.zero": {
        backgroundImage: `url(${zero})`
      }
    },
    ".content": {
      position: "absolute",
      padding: "10px 20px",
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "#222",
      textAlign: "right"
    },
    a: {
      color: "#fff",
      fontSize: 20
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
