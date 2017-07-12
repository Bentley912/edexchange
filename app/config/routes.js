import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import EdProfile from "../components/EdProfile";
import Main from "../components/Main"
import Profile from "../components/Profile";
import edModal from "../components/edModal";
import edRequest from "../components/edRequest";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="edProfile" component={EdProfile} />
      <Route path="Profile" component={Profile} />
      <Route path="edModal" component={edModal} />
      <Route path="edRequest" component={edRequest} />
    </Route>
  </Router>
);

export default routes;
