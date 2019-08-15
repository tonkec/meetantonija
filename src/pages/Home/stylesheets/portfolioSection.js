import { css } from "emotion";
import { portfolioBg, topGutter } from "./../../../stylesheets/variables";
import craftstrom from "./../../../images/home/craftstrom.png";
import peaks from "./../../../images/home/peaks.png";
import code from "./../../../images/home/codeinstitute.png";
import pimsf from "./../../../images/home/pimsf_logo.png";
import sessions from "./../../../images/home/sessions_tracker.png";
import hover from "./../../../images/home/text_hover.png";
const portfolioSection = css({
  backgroundColor: portfolioBg,
  paddingTop: topGutter,
  paddingBottom: topGutter
});

const portfolioItem = css({
  cursor: " pointer",
  position: "relative",
  minHeight: 250,
  borderRadius: 10,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  border: "0.5px solid #ccc",
  marginBottom: 30,

  "&.craftstrom": {
    backgroundImage: `url(${craftstrom})`
  },
  "&.peaks": {
    backgroundImage: `url(${peaks})`
  },
  "&.pimsf": {
    backgroundImage: `url(${pimsf})`
  },
  "&.codeinstitute": {
    backgroundImage: `url(${code})`
  },
  "&.sessionstracker": {
    backgroundImage: `url(${sessions})`
  },
  "&.texthovereffects": {
    backgroundImage: `url(${hover})`
  }
});

export { portfolioSection, portfolioItem };
