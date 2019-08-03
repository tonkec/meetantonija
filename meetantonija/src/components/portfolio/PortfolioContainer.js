import React from "react";
import portfolioItem from "./stylesheets/portfolioItem";
import portfolioSection from "./stylesheets/portfolioSection";

const items = ["pimsf", "craftstrom", "codeinstitute", "peaks"];
const PortfolioContainer = () => (
  <section className={portfolioSection}>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-8 offset-sm-2">
          <div className="row">
            {items.map((item, i) => (
              <div className="col-sm-6" key={i}>
                <a>
                  <div className={`${portfolioItem} ${item}`}></div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioContainer;
