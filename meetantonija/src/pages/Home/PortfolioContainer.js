import React from "react";
import {
  portfolioSection,
  portfolioItem
} from "./stylesheets/portfolioSection";
import data from "components/data";
import { Link } from "react-router-dom";
import { orderBy } from "lodash";
let { items } = data;
let sortedByCompletion = orderBy(items, ["completed"], ["desc"]);
const PortfolioContainer = () => (
  <section className={portfolioSection}>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-8 offset-sm-2">
          <div className="row">
            {sortedByCompletion.map((item, i) => (
              <div className="col-sm-6" key={i}>
                <Link
                  to={`/portfolio/${item.title
                    .replace(/ /g, "")
                    .toLowerCase()}`}
                >
                  <div
                    className={`${portfolioItem} ${item.title
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
);

export default PortfolioContainer;
