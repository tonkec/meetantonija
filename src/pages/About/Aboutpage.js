import React from "react";
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import ContactContainer from "./../../components/contact/ContactContainer";
import About from "./styles/About";
import Image from "./../../components/gallery/Image";

import punk from "./../../images/about/footer_guitar.jpg";
import scss from "./../../images/about/beer.jpg";
import workshop from "./../../images/about/workshop.jpg";
import zero from "./../../images/about/from_zero.jpg";
import vienna from "../../images/about/css_in_vienna.jpg";
import students from "./../../images/about/students.jpg";

const data = [
  {
    title: "vienna",
    href: "https://www.meetup.com/css-in-vienna/events/267266901/",
    content: "Coding a piano @ CSS-in-Vienna",
    src: vienna
  },
  {
    title: "scss",
    href: "https://www.meetup.com/S_CSS_Zagreb/events/265312074/",
    content: "Coding a pure CSS beer @ Scss Meetup",
    src: scss
  },
  {
    title: "students",
    href: "https://codeinstitute.net/",
    content: "Teaching students @ Code Institute",
    src: students
  },
  {
    title: "punk",
    href: "https://punkrockdev.com/",
    content: "Goofing around with Punk Rock Dev",
    src: punk
  },
  {
    title: "zero",
    href: "https://slides.com/tonkecpalonkec/from-zero-to-s-hero/#/",
    content: "Encouraging LGBTQI+ community to start coding!",
    src: zero
  },
  {
    title: "workshop",
    href: "https://github.com/tonkec/workshop",
    content: "Free workshop for beginners",
    src: workshop
  }
];

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
          {data.map((image, i) => (
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
