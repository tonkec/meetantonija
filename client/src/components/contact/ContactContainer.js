import React from "react";
import Grid from "./../Grid";
import contact from "./style/contact";
import * as emailjs from "emailjs-com";
const ContactContainer = () => {
  const onSubmitForm = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        "meetantonija",
        "#form",
        "user_LOSuz8pR7cowgxlm0LOa5"
      )
      .then(
        response => {
          alert("Thank you for your message! I will get back to you soon :D");
          //  console.log('SUCCESS!', response.status, response.text);
        },
        err => {
          //  console.log('FAILED...', err);
        }
      );
  };
  return (
    <section className={`section__contact ${contact}`}>
      <Grid container="container">
        <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 text-center">
          <h2 className="section__heading yellow-selection">Say Hi!</h2>
        </div>
      </Grid>

      <Grid container="container">
        <div className="col-xs-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <form id="form" method="post" onSubmit={onSubmitForm}>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="field">
                  <div className="control">
                    <input
                      type="text"
                      required
                      name="userName"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="field">
                  <div className="control">
                    <input
                      type="text"
                      name="userEmail"
                      required
                      placeholder="Your Email"
                      pattern="[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="field">
                  <div className="control">
                    <textarea
                      name="userMessage"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                    <button className="button float-right" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Grid>
    </section>
  );
};

export default ContactContainer;
