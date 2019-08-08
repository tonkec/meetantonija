import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "pages/Homepage";
import Aboutpage from "pages/Aboutpage";
import Lostpage from "pages/Lostpage";
import PortfolioItems from "components/portfolio";

const components = Object.keys(PortfolioItems);

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={Aboutpage} />
      {components.map((component, i) => (
        <Route
          path={`/portfolio/${components[i].toLowerCase()}`}
          component={PortfolioItems[component]}
          key={i}
        />
      ))}
      <Route component={Lostpage} />
    </Switch>
  );
};

export default Routes;
