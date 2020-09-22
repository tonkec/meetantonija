import { css } from "emotion";
import { portfolioBg, topGutter } from "./../../../stylesheets/variables";
import craftstrom from "./../../../images/home/craftstrom.png";
import peaks from "./../../../images/home/peaks.png";
import code from "./../../../images/home/codeinstitute.png";
import pimsf from "./../../../images/home/pimsf_logo.png";
import sessions from "./../../../images/home/sessions_tracker.png";
import hover from "./../../../images/home/text_hover.png";
import revuto from "./../../../images/home/revuto_logo.png";
import formunauts from "./../../../images/home/formunauts_logo.png";

const portfolioItem = css({
  cursor: " pointer",
  position: "relative",
  minHeight: 180,
  borderRadius: 5,
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
  "&.formunauts": {
    backgroundImage: `url(${formunauts})`
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
  },
  "&.revuto": {
    backgroundImage: `url(${revuto})`
  }
});

export { portfolioItem };
