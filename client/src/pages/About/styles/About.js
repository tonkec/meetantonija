import { css } from "emotion";
import { yellow, black } from "./../../../stylesheets/variables";
import async from "./../../../images/about/async_labs.jpg";
import code_institute from "./../../../images/about/code_institute_students_small.jpg";
import punk from "./../../../images/about/footer_guitar.png";
import me from "./../../../images/about/me_working.jpg";
import scss from "./../../../images/about/beer.jpg";
import workshop from "./../../../images/about/workshop.jpg";
import borders from "./../../../images/about/borders_none.jpg";
import zero from "./../../../images/about/from_zero.jpg";
const about = css({
  header: {
    padding: "150px",

    h1: {
      backgroundColor: yellow,
      display: "inline-block",
      marginBottom: 30,
      fontWeight: 700,
      fontSize: "3rem"
    }
  },
  ".card": {
    marginBottom: 30,

    "&__image": {
      height: 350,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      marginBottom: 30,
      "&.top": {
        backgroundPosition: "top"
      },

      "&.scss": {
        backgroundImage: `url(${scss})`
      },
      "&.async": {
        backgroundImage: `url(${async})`
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
      },
      "&.borders": {
        backgroundImage: `url(${borders})`
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
    minHeight: 300,
    borderRadius: 7,
    border: `3px solid #222`,
    "&.large": {
      width: "auto",
      height: 450
    }
  },
  ".section-about__images": {
    backgroundColor: "white",
    padding: "80px 15px"
  }
});

export default about;
