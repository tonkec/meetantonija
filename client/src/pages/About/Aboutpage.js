import React from "react";
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import ContactContainer from "./../../components/contact";
import async from "./../../images/about/async_labs.jpg";
import borders from "./../../images/about/borders_none.jpg";
import code_institute from "./../../images/about/code_institute_students.jpg";
import punk from "./../../images/about/footer_guitar.png";
import me from "./../../images/about/me_working.jpg";
import scss from "./../../images/about/scss_meetup.jpeg";
import workshop from "./../../images/about/workshop.jpg";

import About from "./styles/About";
let images = [async, borders, scss, workshop, me, punk, code_institute];
const Aboutpage = () => (
  <main className={`${About}`}>
    <Header>
      <div className="col-6">
        <h1>Hello world</h1>
        <p>
          I am a developer who enjoys spending her evenings exploring new cool
          stuff on the web. The biggest joy I get in professional work is when I
          start project completely from scratch. I am CSS junky, I really care
          about CSS. I believe its importance is underestimated among
          developers. That is why I started Meetup group in Zagreb for CSS only.
          I wrote my first line of code long time ago in the 90s. I was that kid
          in the neighbourhood who could install the latest Windows on any
          machine. I got serious about coding around 2015 when I got first job
          in coding. Due to my introvertism I like to work in smaller teams
          where people are familiar and nice to me. I believe delivering a
          software then becomes more personal experience. Then I feel happy to
          invest my time and effort into software that I care about.
        </p>
      </div>
    </Header>
    <section className="section-about__images container-fluid">
      <div className="row">
        {images.map((image, i) => (
          <div className="col-sm-4">
            <div className="card">
              <img src={image} />
            </div>
          </div>
        ))}
      </div>
    </section>
    <section>
      <ContactContainer />
    </section>
    <Footer />
  </main>
);

export default Aboutpage;
