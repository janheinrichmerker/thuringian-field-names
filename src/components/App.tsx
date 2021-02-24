import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Home from "../routes/Home";
import { Archive, Project } from "../routes/Project";
import { Component } from "react";
import { AppNav } from "./AppNav";
import { AppFooter } from "./AppFooter";

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route path="/archive">
            <Redirect to="/project/archive" />
          </Route>
          <Route exact path="/project/archive" component={Archive} />
        </Switch>
        <AppFooter />
      </HashRouter>
    );
  }
}
