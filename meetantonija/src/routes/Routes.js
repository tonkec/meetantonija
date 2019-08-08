import React from "react";
import { Switch, Route } from "react-router-dom";
import ROUTES from "./routeNames";
import Homepage from "pages/Homepage";
import PortfolioItems from "components/portfolio/PortfolioItems";
const Routes = () => {
  const { PIMSF_URL, CI_URL, CRAFTSTROM_URL, PEAKS_URL } = ROUTES;
  let portfolioComponents = Object.keys(PortfolioItems);
  let components = [];
  // portfolioComponents.forEach((key) => (
  //   components.push(portfolioComponents[key](url))
  // ))
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      {portfolioComponents.map((portfolioComponent, i) => (
        <Route
          path={CRAFTSTROM_URL}
          component={PortfolioItems[portfolioComponent]}
          key={i}
        />
      ))}
      {}
    </Switch>
  );
};

export default Routes;
