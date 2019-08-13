import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "pages/Home";
import Aboutpage from "pages/About";
import Contactpage from "pages/Contact";

import Lostpage from "pages/404";
import PortfolioItems from "components/portfolio";

const components = Object.keys(PortfolioItems);

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={Aboutpage} />
      <Route path="/contact" component={Contactpage} />

      {components.map((component, i) => (
        <Route
          path={`/${components[i].toLowerCase()}`}
          component={PortfolioItems[component]}
          key={i}
        />
      ))}
      <Route component={Lostpage} />
    </Switch>
  );
};

export default Routes;
