import React from "react";
import Footer from "./../../components/footer";
import ContactContainer from "./../../components/contact";
import Header from "./../../components/header";

const ContactPage = props => (
  <section className="contactpage">
    <Header>
      <div className="col-8 offset-2 text-center">
        <h1>
          Let's work together on an interesting project with interesting
          technologies!
        </h1>
      </div>
    </Header>
    <ContactContainer text={"Let's chat"} />
    <Footer />
  </section>
);

export default ContactPage;
