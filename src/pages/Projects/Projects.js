import React from "react";
import PortfolioContainer from "../../pages/Home/PortfolioContainer";
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import ContactContainer from "./../../components/contact/ContactContainer";

const Projectspage = () => (
  <main className="projects">
    <div className="col-12">
      <PortfolioContainer />
    </div>

    <section>
      <ContactContainer />
    </section>
    <Footer />
  </main>
);

export default Projectspage;
