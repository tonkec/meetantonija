import React from "react";
import Footer from "./../../components/footer";
import ContactContainer from "./../../components/contact";
import Header from "./../../components/header";

const ContactPage = props => (
  <section className="contactpage">
    <ContactContainer text={"Let's chat!"} />
    <Footer />
  </section>
);

export default ContactPage;
