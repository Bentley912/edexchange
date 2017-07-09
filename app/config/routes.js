import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import EdProfile from "../components/EdProfile";
import Main from "../components/Main"

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="edProfile" component={EdProfile} />
     
    </Route>
  </Router>
);

export default routes;
