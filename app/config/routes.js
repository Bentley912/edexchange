import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import Main from "../components/Main";
import Home from "../components/Home"
import Signup from "../components/Signup"
import Login from "../components/Login"
import Member from "../components/Member"
import Option from "../components/Option"


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
       <Route path="signup" component={Signup} />
       <Route path="login" component={Login} />
       <Route path="member" component={Member} />
       <Route path="option" component={Option} />
    </Route>
  </Router>
);

export default routes;
