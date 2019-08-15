import React from "react";
import PortfolioItem from "./PortfolioItem";
import data from "./../data";
import normalTitle from "./../helpers/normalTitle";
let { client, hobby } = data;
let PortfolioItems = {};
let PortfolioHobbyItems = {};
let titles = client.map(item => normalTitle(item.title));
let hobbyTitles = hobby.map(item => item.title);
let title;
client.map((item, i) => {
  title = normalTitle(item.title);
  const links = titles.filter(item => item !== title);
  return (PortfolioItems[title] = () => (
    <PortfolioItem links={links} data={client[i]} />
  ));
});

// refactor, remove repetition
hobby.map((project, i) => {
  title = normalTitle(project.title);
  const links = hobbyTitles.filter(title => {
    return title !== project.title;
  });
  return (PortfolioHobbyItems[title] = () => (
    <PortfolioItem links={links} data={hobby[i]} />
  ));
});

export { PortfolioItems, PortfolioHobbyItems };
