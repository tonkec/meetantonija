import React from "react";
import PortfolioItem from "./PortfolioItem";
import data from "components/data";
let { client, hobby } = data;
const PortfolioItems = {};
let titles = client.map(item => item.title.replace(/ /g, ""));
let title;
client.map((item, i) => {
  title = item.title.replace(/ /g, "");
  const links = titles.filter(item => item !== title);
  return (PortfolioItems[title] = () => (
    <PortfolioItem links={links} data={client[i]} />
  ));
});

export default PortfolioItems;
