import React from "react";
import Grid from "components/Grid";
import contact from "./style/contact";

const ContactContainer = () => (
  <section className={`section__contact ${contact}`}>
    <Grid container="container">
      <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 text-center">
        <h2 className="section__heading yellow-selection">Say Hi!</h2>
      </div>
    </Grid>

    <Grid container="container">
      <div className="col-xs-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <form id="form" method="post">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    required=""
                    name="from_name"
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
                    name="from_email"
                    required=""
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
                    name="message_html"
                    rows="5"
                    placeholder="Message"
                    required=""
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

export default ContactContainer;
