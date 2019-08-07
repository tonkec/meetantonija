import React from "react";
import { Switch, Route } from "react-router-dom";
import ROUTES from "./routeNames";
import Craftstrom from "pages/Craftstrom";
import Homepage from "pages/Homepage";

const Routes = () => {
  const { PIMSF_URL, CI_URL, CRAFTSTROM_URL, PEAKS_URL } = ROUTES;
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path={CRAFTSTROM_URL} component={Craftstrom} />
    </Switch>
  );
};

export default Routes;
