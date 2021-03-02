import { Component } from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { Home } from "../routes/Home";
import { Archive } from "../routes/Archive";
import { Project } from "../routes/Project";
import { AppNav } from "./AppNav";
import { AppFooter } from "./AppFooter";
import { UnknownRoute } from "../routes/UnknownRoute";
import { User } from "../routes/User";

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route path="/archive">
            <Redirect to="/project/archive" />
          </Route>
          <Route exact path="/project/archive">
            <Archive />
          </Route>
          <Route exact path="/login">
            <User />
          </Route>
          <Route exact path="/signup">
            <User />
          </Route>
          <Route>
            <UnknownRoute />
          </Route>
        </Switch>
        <AppFooter />
      </HashRouter>
    );
  }
}
