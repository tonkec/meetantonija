import React from "react";
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import PortfolioContainer from "./PortfolioContainer";
import TestimonalSection from "./TestimonalSection";
import SkillsSection from "./SkillsSection";
import Contact from "./../../components/contact";
import Svg from "../../components/header/table.svg";
import { ReactSVG } from "react-svg";

const Homepage = () => (
  <>
    <Header>
      <div className="col">
        {/* <h1 className="header__heading">
          I’m <b>Antonija</b> - a freelance <b>front-end developer</b> based in
          Zagreb. I am the <b>glue</b> that holds back-end developers and
          designers <b>together.</b>
        </h1> */}
        <ReactSVG src={Svg} />
      </div>
    </Header>
    {/* <SkillsSection />
    <PortfolioContainer />
    <TestimonalSection />
    <Contact text={"Say Hi!"} /> */}
    <Footer />
  </>
);

export default Homepage;
