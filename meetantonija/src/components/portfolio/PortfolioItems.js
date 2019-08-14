import React from "react";
import PortfolioItem from "./PortfolioItem";
import data from "components/data";
import normalTitle from "components/helpers/normalTitle";
let { client, hobby } = data;
let PortfolioItems = {};
let PortfolioHobbyItems = {};
let titles = client.map(item => normalTitle(item.title));
let hobbyTitles = hobby.map(item => normalTitle(item.title));
let title;
client.map((item, i) => {
  title = normalTitle(item.title);
  const links = titles.filter(item => item !== title);
  return (PortfolioItems[title] = () => (
    <PortfolioItem links={links} data={client[i]} />
  ));
});

hobby.map((item, i) => {
  title = normalTitle(item.title);
  const links = hobbyTitles.filter(item => item !== title);
  return (PortfolioHobbyItems[title] = () => (
    <PortfolioItem links={links} data={hobby[i]} />
  ));
});

export { PortfolioItems, PortfolioHobbyItems };
