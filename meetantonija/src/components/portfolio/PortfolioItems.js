import React from "react";
import PortfolioItem from "./PortfolioItem";
import data from "./data";
let { items } = data;
const PortfolioItems = {};
let titles = items.map(item => item.title.replace(/ /g, ""));
let title;
items.map((item, i) => {
  title = item.title.replace(/ /g, "");
  const links = titles.filter(item => item !== title);
  return (PortfolioItems[title] = () => (
    <PortfolioItem links={links} data={items[i]} />
  ));
});

export default PortfolioItems;
