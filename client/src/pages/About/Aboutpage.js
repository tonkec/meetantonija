import React from "react";
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import ContactContainer from "./../../components/contact";

import About from "./styles/About";

const Aboutpage = () => (
  <main className={`${About}`}>
    <Header>
      <div className="col-6">
        <h1>Hello world</h1>
        <h2>Code. Teach. Play.</h2>
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

        {/* <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="card">
            <div className="content">
              <a
                href="https://www.bordersnone.com/coders-without-borders/"
                target="_blank"
              >
                Celebrating successful coding day with borders:none;
              </a>
            </div>
            <div className="card__image borders" />
          </div>
        </div> */}
      </div>
    </section>

    {/* <section className="section is-white">
      <div className="container">
        <div className="row is-centered">
          <div className="col-6 text-center">
            <h2>I really often hold talks on Scss meetups</h2>

            <ul>
              <li>
                <a href="https://www.meetup.com/S_CSS_Zagreb/events/257860075/">
                  CSS Grid
                </a>
              </li>
              <li>
                <a href="https://www.meetup.com/S_CSS_Zagreb/events/259088646/">
                  Pseudo Classes
                </a>
              </li>
              <li>
                <a href="https://www.meetup.com/S_CSS_Zagreb/events/260470749/">
                  SVGs 101
                </a>
              </li>
              <li>
                <a href="https://www.meetup.com/S_CSS_Zagreb/events/262442215/">
                  Pseudoelements
                </a>
              </li>

              <li>
                <a href="https://www.meetup.com/S_CSS_Zagreb/events/265312074/">
                  CSS animations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section> */}
    <section>
      <ContactContainer />
    </section>
    <Footer />
  </main>
);

export default Aboutpage;
