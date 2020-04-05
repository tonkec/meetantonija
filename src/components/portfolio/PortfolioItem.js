import React from "react";
import { Link } from "react-router-dom";
import Footer from "./../footer";
import portfolioItem from "./stylesheets/portfolioItem";
import normalTitle from "./../helpers/normalTitle";
import Image from "./../../components/gallery/Image";

const PortfolioItem = ({ data, links }) => (
  <div className={`page ${portfolioItem} page--${normalTitle(data.title)}`}>
    {console.log(data)}
    <header
      className={`section-portfolio__header section-portfolio__header--${normalTitle(
        data.title
      )}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-10 offset-sm-1 col-md-10 offset-md-1 text-center">
            <h1 className="section-portfolio__title">{data.title}</h1>
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
              <a
                href={data.link || data.code}
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
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
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={data.projectLink}
                className="link"
              >
                {data.title === "Craftstrom" ? "Google Play" : data.projectLink}
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

    <section className="section-portfolio__gallery is-white">
      <div className="container">
        <div className="row is-centered">
          <div className="col-sm-12 col-md-10 col-lg-8">
            <div className="row">
              {data.images.map((image, i) => (
                <div key={i} className="col">
                  <Image image={image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-portfolio__links">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {links.map((link, i) => (
              <Link to={normalTitle(link)} key={i} className="link">
                {normalTitle(link)}
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
