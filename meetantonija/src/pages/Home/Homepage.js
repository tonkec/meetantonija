import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import PortfolioContainer from "./PortfolioContainer";
import TestimonalSection from "./TestimonalSection";

const Homepage = () => (
  <>
    <Header>
      <div className="col">
        <h1 className="header__heading">
          I’m <b>Antonija</b> - a freelance <b>front-end developer</b> based in
          Zagreb. I am a <b>glue</b> that holds back-end developers and
          designers <b>together.</b>
        </h1>
      </div>
    </Header>
    <PortfolioContainer />
    <TestimonalSection />
    <Footer />
  </>
);

export default Homepage;
