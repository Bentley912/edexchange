import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import EdProfile from "../components/EdProfile";
import Main from "../components/Main"
import Home from "../components/Home"
import Profile from "../components/Profile";
import edModal from "../components/edModal";
import edRequest from "../components/edRequest";
import expertProfile from "../components/expertProfile";
import exPage from "../components/exPage";
import Helptype from "../components/Helptype";
import All from "../components/All";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="edProfile" component={EdProfile} />
      <Route path="Profile" component={Profile} />
      <Route path="edModal" component={edModal} />
      <Route path="edRequest" component={edRequest} />
      <Route path="expertProfile" component={expertProfile} />
      <Route path="exPage" component={exPage} />
      <Route path="Helptype" component={Helptype} />  
      <Route path="All" component={All} />  
    </Route>
  </Router>
);

export default routes;
