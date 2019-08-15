import React from "react";
import footer from "./stylesheets/footer";
import FooterList from "./FooterList";

class Footer extends React.Component {
  componentDidMount() {
    let height = document.getElementsByTagName("footer")[0].offsetHeight;
    let previousSibling = document.getElementsByTagName("footer")[0]
      .previousSibling;
    previousSibling.setAttribute("style", `margin-bottom: ${height}px`);
  }

  render() {
    return (
      <footer className={footer}>
        <FooterList />
      </footer>
    );
  }
}

export default Footer;
