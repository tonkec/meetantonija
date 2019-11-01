import React from "react";
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import ContactContainer from "./../../components/contact";

import About from "./styles/About";

const Aboutpage = () => (
  <main className={`${About}`}>
    <Header>
      <div className="col-6">
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
                href="https://www.meetup.com/S_CSS_Zagreb/events/265312074/"
                target="_blank"
              >
                How to code pure CSS beer @ Scss Meetup
              </a>
            </div>
            <div className="card__image scss" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a href="https://codeinstitute.net/" target="_blank">
                Teaching students @ Code Institute
              </a>
            </div>
            <div className="card__image ci" />
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a href="https://punkrockdev.com/" target="_blank">
                Goofing around with Punk Rock Dev
              </a>
            </div>
            <div className="card__image punk" />
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a href="https://www.asynclabs.co/about" target="_blank">
                Crew @ Async Labs
              </a>
            </div>
            <div className="card__image async top" />
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a
                href="https://slides.com/tonkecpalonkec/from-zero-to-s-hero/#/"
                target="_blank"
              >
                Encouraging LGBTQI+ community to start coding!
              </a>
            </div>
            <div className="card__image zero" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a href="https://github.com/tonkec/workshop" target="_blank">
                Free workshop for beginners
              </a>
            </div>
            <div className="card__image workshop" />
          </div>
        </div>
      </div>
    </section>

    <section className="section is-grey">
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <h2>I often hold talks on S(CSS) meetups:</h2>

            <ul className="list">
              <li>
                <a
                  target="_blank"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/257860075/"
                >
                  CSS Grid Meetup
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/259088646/"
                >
                  Pseudo Classes Meetup
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/260470749/"
                >
                  SVGs 101 Meetup
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/262442215/"
                >
                  Pseudoelements Meetup
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.meetup.com/S_CSS_Zagreb/events/265312074/"
                >
                  CSS animations Meetup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <section>
      <ContactContainer />
    </section> */}
    <Footer />
  </main>
);

export default Aboutpage;
