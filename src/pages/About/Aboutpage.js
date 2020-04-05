import React from "react";
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import ContactContainer from "./../../components/contact/ContactContainer";
import About from "./styles/About";
import Image from "./../../components/gallery/Image";
import data from "../../data/data";
const { images } = data;
const Aboutpage = () => (
  <main className={`${About}`}>
    <Header>
      <div className="col-12">
        <h1>Hello world!</h1>
        <h2>Code. Teach. CSS.</h2>
      </div>
    </Header>

    <section className="section is-white">
      <div className="container">
        <div className="row">
          {images.map((image, i) => (
            <div key={i} className="col-sm-12 col-md-6">
              <Image image={image} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section is-grey">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <h2>I held talk on several S(CSS) meetups:</h2>

            <ul className="list">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/257860075/"
                >
                  CSS Grid Meetup
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/259088646/"
                >
                  Pseudo Classes Meetup
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/260470749/"
                >
                  SVGs 101 Meetup
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/262442215/"
                >
                  Pseudoelements Meetup
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/265312074/"
                >
                  CSS animations Meetup
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/266253881/"
                >
                  CSS tricks
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <ContactContainer />
    </section>
    <Footer />
  </main>
);

export default Aboutpage;
