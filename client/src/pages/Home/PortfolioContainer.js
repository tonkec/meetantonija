import React from "react";
import {
  portfolioSection,
  portfolioItem
} from "./stylesheets/portfolioSection";
import data from "./../../components/data";
import { Link } from "react-router-dom";
import { orderBy } from "lodash";
let { client, hobby } = data;
let sortedByCompletion = orderBy(client, ["completed"], ["desc"]);
let sortedByCompletionHobby = orderBy(hobby, ["completed"], ["desc"]);
const PortfolioContainer = () => (
  <>
    <section
      className={`${portfolioSection} section--client section--bordered`}
    >
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className="section__heading">Client Work</h2>
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
      </div>
    </section>
    <section className={`${portfolioSection} section--hobby`}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className="section__heading">Hobby Projects</h2>
          </div>
        </div>
        <div className="row is-centered">
          <div className="col-xs-12 col-sm-12 col-xl-8">
            <div className="row is-centered">
              {sortedByCompletionHobby.map((item, i) => (
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
      </div>
    </section>
  </>
);

export default PortfolioContainer;
