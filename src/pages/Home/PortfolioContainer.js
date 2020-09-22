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
    <section className="section--client section--bordered"></section>
  </>
);

export default PortfolioContainer;
