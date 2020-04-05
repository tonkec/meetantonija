import React from "react";
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import ContactContainer from "./../../components/contact/ContactContainer";
import About from "./styles/About";
import Image from "./../../components/gallery/Image";
import data from "../../data/data";
const { images } = data;

const Aboutpage = () => (
  <main className={`${About} aboutpage`}>
    <Header>
      <div className="col-sm-10 col-lg-8 col-xl-6">
        <p>
          My name is <b>Antonija Šimić</b>. I am a freenalce front end developer
          and a{" "}
          <b>
            <a
              href="https://punkrockdev.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              punk rock developer
            </a>
          </b>
          . I organize{" "}
          <b>
            <a
              href="https://www.meetup.com/S_CSS_Zagreb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS meetup
            </a>
          </b>
          &nbsp;in Zagreb where I code&nbsp;
          <b>
            <a
              href="https://codepen.io/collection/DJOQbx?cursor=ZD0wJm89MSZwPTEmdj0yODcxMDI2"
              target="_blank"
              rel="noopener noreferrer"
            >
              funny things
            </a>
          </b>{" "}
          using only CSS. Encouraging others to start coding, especially
          minorities, like&nbsp;
          <b>
            <a
              href="https://www.bordersnone.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              refugees
            </a>
          </b>
          , gives me the great sense of
          <b> purpose</b>. In my career, great pleasure also comes from
          <b> mentoring </b>less experienced developers. In my non coding time,
          I play <b>basketball</b>, volunteer in <b>LGBTIQA+</b> organizations
          and explore <b>music</b>
          &nbsp;with drums and guitar.
        </p>
      </div>{" "}
      <div className="antonija"></div>
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
                  href="https://www.meetup.com/css-in-vienna/events/267266901/"
                >
                  CSS-in-Vienna
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
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/257860075/"
                >
                  CSS Grid Meetup
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
