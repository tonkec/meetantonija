import React from "react";
import async from "images/about/async_labs.jpg";
import borders from "images/about/borders_none.jpg";
import code_institute from "images/about/code_institute_students.jpg";
import punk from "images/about/footer_guitar.png";
import me from "images/about/me_working.jpg";
import scss from "images/about/scss_meetup.jpeg";
import workshop from "images/about/workshop.jpg";

import About from "./About";
let images = [async, borders, scss, workshop, me, punk, code_institute];
const Aboutpage = () => (
  <>
    <section className={`container-fluid ${About}`}>
      <section className="row">
        {images.map((image, i) => (
          <div className="col-sm-4">
            <div className="card">
              <img src={image} />
            </div>
          </div>
        ))}
      </section>
    </section>
  </>
);

export default Aboutpage;
