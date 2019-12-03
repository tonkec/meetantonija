import React from "react";
import { Link } from "react-router-dom";
import Footer from "./../footer";
import portfolioItem from "./stylesheets/portfolioItem";
import normalTitle from "./../helpers/normalTitle";

const PortfolioItem = ({ data, links }) => (
  <div className={`page ${portfolioItem} page--${normalTitle(data.title)}`}>
    <header
      className={`section-portfolio__header section-portfolio__header--${normalTitle(
        data.title
      )}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-10 offset-sm-1 col-md-10 offset-md-1 text-center">
            <h1 className="section-portfolio__title">{data.title}</h1>
            <a href={data.headerImage} target="_blank" rel="noopener">
              <img src={data.headerImage} />
            </a>
          </div>
        </div>
      </div>
    </header>
    <section className="section-portfolio__data">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h3>{data.client ? "Client" : "Code"}</h3>
            <p>
              <a href={data.link || data.code} rel="noopener" target="_blank">
                {data.client || data.code}
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
              <a rel="noopener" target="_blank" href={data.projectLink}>
                {data.projectLink}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-portfolio__about">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-lg-8 section-col">
            <h2 className="section-portfolio__subtitle">Description</h2>
            <p className="section-portfolio__description">{data.description}</p>
          </div>

          <div className="col-sm-10 col-lg-8 section-col">
            <h2 className="section-portfolio__subtitle">Technology</h2>
            <p className="section-portfolio__description">
              {data.technologyDescription}
            </p>
          </div>

          {data.myRole && (
            <div className="col-sm-10 col-lg-8 section-col">
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
          )}
        </div>
      </div>
    </section>
    {/* {data.footerImages.length > 0 && (
      <section
        className={`section-portfolio__images section-portfolio__images--${normalTitle(
          data.title
        )}`}
      >
        <div className="container-fluid">
          <div className="row">
            {data.footerImages.length > 1
              ? data.footerImages.map((image, i) => (
                  <div
                    className="col-sm-8 offset-sm-2 col-lg-4 offset-lg-1 text-center"
                    key={i}
                  >
                    <a href={image} target="_blank" rel="noopener">
                      <img src={image} />
                    </a>
                  </div>
                ))
              : data.footerImages.map((image, i) => (
                  <div
                    className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"
                    key={i}
                  >
                    <a href={image} target="_blank" rel="noopener">
                      <img src={image} />
                    </a>
                  </div>
                ))}
          </div>
        </div>
      </section>
    )} */}

    <section className="section-portfolio__links">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {links.map((link, i) => (
              <Link to={normalTitle(link)} key={i} className="button">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default PortfolioItem;
