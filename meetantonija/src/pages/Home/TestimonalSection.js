import React from "react";
import testimonialSection from "./stylesheets/testimonialSection";

const TestimonalSection = () => (
  <section className={`section__testimonial ${testimonialSection}`}>
    <div className="container-fluid">
      <div className="row">
        <div class="col text-center">
          <h2 class="yellow-selection">Some nice things about me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <figure>
            <blockquote cite="https://codeinstitute.net">
              <p>
                Antonija is a superb developer. She is detail focused and she
                helped us make a superb educational product. She is a pleasure
                to work with. I'd highly recommend her.
              </p>
            </blockquote>
            <figcaption>
              <a
                href="https://codeinstitute.net"
                rel="noopener"
                target="_blank"
              >
                Brian O'Grady, Code Institute
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="col-xl-4">
          <figure>
            <blockquote cite="https://www.supersuperagency.com">
              <p>
                It was a pleasure to work with Antonija. She is very fast
                working developer with large scope of frontend technologies. She
                takes every task in great detail and brings her advices and
                insight into development.
              </p>
            </blockquote>
            <figcaption>
              {" "}
              <a
                href="https://www.supersuperagency.com/"
                rel="noopener"
                target="_blank"
              >
                Mario Stipetic, Supersuperstudio
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="col-xl-4">
          <figure>
            <blockquote cite="https://github.com/maria-mir">
              <p>
                I owe you a big thank you for all your resources, useful
                feedbacks and wealth of knowledge that helped me achieve great
                scores. You made me aim high which makes you an incredible
                mentor!
              </p>
            </blockquote>
            <figcaption>
              {" "}
              <a
                href="https://github.com/maria-mir"
                rel="noopener"
                target="_blank"
              >
                Maria Mir, Student at Code Institute
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonalSection;
