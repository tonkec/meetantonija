import React from "react";
import Craftstrom from "pages/Craftstrom";
import PortfolioItem from "./PortfolioItem";

const PortfolioItems = {
  Craftstrom: url => (
    <PortfolioItem url={url}>
      <Craftstrom />
    </PortfolioItem>
  )
};

export default PortfolioItems;
