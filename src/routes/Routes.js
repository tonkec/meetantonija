import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./../pages/Home";
import Aboutpage from "./../pages/About";
import Contactpage from "./../pages/Contact";
import Projectspage from "./../pages/Projects";
import Lostpage from "./../pages/404";

import { PortfolioItems, PortfolioHobbyItems } from "./../components/portfolio";

const components = Object.keys(PortfolioItems);
const hobbyComponents = Object.keys(PortfolioHobbyItems);

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/contact" component={Contactpage} />
      <Route path="/about" component={Aboutpage} />
      <Route path="/projects" component={Projectspage} />

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
