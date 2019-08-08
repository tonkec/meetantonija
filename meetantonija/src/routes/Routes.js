import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "pages/Homepage";
import PortfolioItems from "components/portfolio";

const components = Object.keys(PortfolioItems);

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      {components.map((component, i) => (
        <Route
          path={`/portfolio/${components[i].toLowerCase()}`}
          component={PortfolioItems[component]}
          key={i}
        />
      ))}
    </Switch>
  );
};

export default Routes;
