import React from "react";
import PortfolioItem from "./PortfolioItem";
import data from "./data";
const PortfolioItems = {};
let title;
let titles = data.items.map(item => item.title.replace(/ /g, ""));
data.items.map((item, i) => {
  title = item.title.replace(/ /g, "");
  const others = titles.filter(item => item !== title);
  return (PortfolioItems[title] = () => (
    <PortfolioItem others={others} data={data.items[i]} />
  ));
});

export default PortfolioItems;
