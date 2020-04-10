import React from "react";
import { Route, Switch } from "react-router-dom";

import GistListPage from "~/UI/Pages/Visitor/GistListPage";
import GistPage from "~/UI/Pages/Visitor/GistPage";
import LandingPage from "~/UI/Pages/Visitor/LandingPage";
import SearchPage from "~/UI/Pages/Visitor/SearchPage";

export default () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/gist-list" component={GistListPage} />
    <Route
      exact
      path="/gist/:name"
      render={(props) => <GistPage {...props} />}
    />
    <Route exact path="/search" component={SearchPage} />
  </Switch>
);
