import React from "react";
import { portfolioItem } from "./stylesheets/portfolioSection";
import data from "./../../data/data";
import { Link } from "react-router-dom";
import { orderBy } from "lodash";
const { projects } = data;
const { client, hobby } = projects;
const sortedByCompletion = orderBy(client, ["completed"], ["desc"]);
const PortfolioContainer = () => (
  <>
    <section className={` section--client section--bordered`}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className="section__heading">Projects</h2>
          </div>
        </div>
        <div className="row is-centered">
          <div className="col-xs-12 col-sm-12 col-xl-8">
            <div className="row is-centered">
              {sortedByCompletion.map((item, i) => (
                <div
                  className="col-xs-12 col-sm-10 col-md-6 offset-md-0 col-lg-5 col-xl-6 portfolio__column"
                  key={i}
                >
                  <Link to={`${item.title.replace(/ /g, "").toLowerCase()}`}>
                    <div
                      className={`portfolio__item ${portfolioItem} ${item.title
                        .replace(/ /g, "")
                        .toLowerCase()}`}
                    ></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row is-centered">
          <div className="col-xs-12 col-sm-12 col-xl-8">
            <div className="row is-centered">
              <div className="col-xs-12 col-sm-10 col-md-6 offset-md-0 col-lg-5 col-xl-10 portfolio__column">
                <iframe
                  height="265"
                  scrolling="no"
                  title="Pure CSS beer"
                  src="https://codepen.io/tonkec/embed/LYYZJzv?height=265&theme-id=light&default-tab=result"
                  frameBorder="no"
                  allowtransparency="true"
                  allowFullScreen={true}
                >
                  See the Pen{" "}
                  <a href="https://codepen.io/tonkec/pen/LYYZJzv">
                    Pure CSS beer
                  </a>{" "}
                  by Antonija Šimić (
                  <a href="https://codepen.io/tonkec">@tonkec</a>) on{" "}
                  <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
              <div className="col-xs-12 col-sm-10 col-md-6 offset-md-0 col-lg-5 col-xl-10 portfolio__column">
                <iframe
                  height="265"
                  scrolling="no"
                  title="Pure CSS record player"
                  src="https://codepen.io/tonkec/embed/NWWJRdK?height=265&theme-id=light&default-tab=result"
                  frameBorder="no"
                  allowtransparency="true"
                  allowFullScreen={true}
                >
                  See the Pen{" "}
                  <a href="https://codepen.io/tonkec/pen/NWWJRdK">
                    Pure CSS record player
                  </a>{" "}
                  by Antonija Šimić (
                  <a href="https://codepen.io/tonkec">@tonkec</a>) on{" "}
                  <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PortfolioContainer;
