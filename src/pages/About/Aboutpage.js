import React from "react";
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import ContactContainer from "./../../components/contact/ContactContainer";
import About from "./styles/About";
import Img from "react-cool-img";

import code_institute from "./../../images/about/code_institute_students_small.jpg";
import punk from "./../../images/about/footer_guitar.png";
import scss from "./../../images/about/beer.jpg";
import workshop from "./../../images/about/workshop.jpg";
import borders from "./../../images/about/borders_none.jpg";
import zero from "./../../images/about/from_zero.jpg";
import vienna from "./../../images/about/css_in_vienna.jpg";
import placeholder from "./../../images/about/placeholder.png";

const Aboutpage = () => (
  <main className={`${About}`}>
    <Header>
      <div className="col-12">
        <h1>Hello world!</h1>
        <h2>Code. Teach. CSS.</h2>
      </div>
    </Header>
    <section className="section-about__images container-fluid">
      <div className="row is-centered">
        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a
                href="https://www.meetup.com/css-in-vienna/events/267266901/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coding a piano @ CSS-in-Vienna
              </a>
            </div>
            <Img
              placeholder={placeholder}
              src={vienna}
              error={placeholder}
              alt="Coding a piano @ CSS-in-Vienna"
            />
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a
                href="https://www.meetup.com/S_CSS_Zagreb/events/265312074/"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to code pure CSS beer @ Scss Meetup
              </a>
            </div>
            <Img
              placeholder={placeholder}
              src={scss}
              error={placeholder}
              alt="How to code pure CSS beer @ Scss Meetup"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a
                href="https://codeinstitute.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teaching students @ Code Institute
              </a>
            </div>
            <Img
              placeholder={placeholder}
              src={code_institute}
              error={placeholder}
              alt="Teaching students @ Code Institute"
            />
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a
                href="https://punkrockdev.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Goofing around with Punk Rock Dev
              </a>
            </div>
            <Img
              placeholder={placeholder}
              src={punk}
              error={placeholder}
              alt="Goofing around with Punk Rock Dev"
            />
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a
                href="https://slides.com/tonkecpalonkec/from-zero-to-s-hero/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Encouraging LGBTQI+ community to start coding!
              </a>
            </div>
            <Img
              placeholder={placeholder}
              src={zero}
              error={placeholder}
              alt="Encouraging LGBTQI+ community to start coding!"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a
                href="https://github.com/tonkec/workshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free workshop for beginners
              </a>
            </div>
            <Img
              placeholder={placeholder}
              src={workshop}
              error={placeholder}
              alt="Free workshop for beginners"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section is-grey">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2>I held talk on several S(CSS) meetups:</h2>

            <ul className="list">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.meetup.com/css-in-vienna/events/267266901/"
                >
                  CSS-in-Vienna #1
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
                  href="https://www.meetup.com/S_CSS_Zagreb/events/265312074/"
                >
                  CSS animations Meetup
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
                  href="https://www.meetup.com/S_CSS_Zagreb/events/260470749/"
                >
                  SVGs 101 Meetup
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
