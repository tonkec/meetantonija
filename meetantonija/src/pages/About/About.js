import { css } from "emotion";
import { yellow, black } from "stylesheets/variables";
const about = css({
  ".card": {
    border: `5px solid ${yellow}`,
    marginBottom: 20
  },
  img: {
    width: "100%",
    minHeight: 300
  }
});

export default about;
