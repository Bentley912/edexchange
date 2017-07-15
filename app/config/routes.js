import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import EdProfile from "../components/EdProfile";
import Main from "../components/Main"
import Profile from "../components/Profile";
import edModal from "../components/edModal";
import edRequest from "../components/edRequest";
import expertProfile from "../components/expertProfile";
import exPage from "../components/exPage";
import Helptype from "../components/Helptype";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="edProfile" component={EdProfile} />
      <Route path="Profile" component={Profile} />
      <Route path="edModal" component={edModal} />
      <Route path="edRequest" component={edRequest} />
      <Route path="expertProfile" component={expertProfile} />
      <Route path="exPage" component={exPage} />
      <Route path="Helptype" component={Helptype} />  
    </Route>
  </Router>
);

export default routes;
