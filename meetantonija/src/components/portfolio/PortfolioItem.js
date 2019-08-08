import React from "react";
import { Link } from "react-router-dom";
const PortfolioItem = props => (
  <div className="portfolioItem">
    <h1>{props.data.title}</h1>
    {props.links.map((link, i) => (
      <Link to={link.toLowerCase()} key={i}>
        {link}
      </Link>
    ))}
  </div>
);

export default PortfolioItem;
