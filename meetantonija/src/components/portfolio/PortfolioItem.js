import React from "react";
import { Link } from "react-router-dom";
import Footer from "components/footer";
import portfolioItem from "./stylesheets/portfolioItem";
import button from "stylesheets/button";
const PortfolioItem = ({ data, links }) => (
  <div className={portfolioItem}>
    <header className="section-portfolio__header">
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-10 offset-sm-1 col-md-12 offset-md-0 text-center">
            <h1 className="section-portfolio__title">{data.title}</h1>
          </div>
        </div>
      </div>
    </header>
    <section className="section-portfolio__data">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h3>{data.client}</h3>
            <p>
              <a href={data.link} rel="noopener" target="_blank">
                {data.link}
              </a>
            </p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <h3>Technology</h3>
            <p>{data.technology}</p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <h3>Completed in</h3>
            <p>{data.completed}</p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <h3>Link</h3>
            <p>
              <a href={data.projectLink}>{data.projectLink}</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-portfolio__about">
      <div className="container">
        <div className="row">
          <div className="offset-sm-1 col-sm-10 col-lg-6 offset-lg-3 section-col">
            <h2 className="section-portfolio__subtitle">Description</h2>
            <p className="section-portfolio__description">{data.description}</p>
          </div>

          <div className="offset-sm-1 col-sm-10 col-lg-6 offset-lg-3 section-col">
            <h2 className="section-portfolio__subtitle">Technology</h2>
            <p className="section-portfolio__description">
              {data.technologyDescription}
            </p>
          </div>

          <div className="offset-sm-1 col-sm-10 col-lg-6 offset-lg-3 section-col">
            <h2 className="section-portfolio__subtitle">
              My Role in the project
            </h2>
            {Object.keys(data.myRole).map((item, i) => (
              <dl key={i}>
                <dt>{item}</dt>
                <dd>{data.myRole[item]}</dd>
              </dl>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-portfolio__images">
      <div className="container-fluid">
        <div className="row">
          <img src="" />
        </div>
      </div>
    </section>

    <section className="section-portfolio__links">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {links.map((link, i) => (
              <Link to={link.toLowerCase()} key={i} className={button}>
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* <Footer /> */}
  </div>
);

export default PortfolioItem;
