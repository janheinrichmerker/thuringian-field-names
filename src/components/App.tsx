import { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../routes/Home";
import { Archive } from "../routes/Archive";
import { Project } from "../routes/Project";
import { AppNav } from "./AppNav";
import { AppFooter } from "./AppFooter";
import { UnknownRoute } from "../routes/UnknownRoute";
import { User } from "../routes/User";
import { Search } from "../routes/Search";
import { Data } from "../routes/Data";
import { Partners } from "../routes/Partners";
import { Imprint } from "../routes/Imprint";
import { Privacy } from "../routes/Privacy";
import { Details } from "../routes/Details";
import { Submit } from "../routes/Submit";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <AppNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/project/archive">
            <Archive />
          </Route>
          <Route path="/archive">
            {/* Short link to project archive page. */}
            <Redirect to="/project/archive" />
          </Route>
          <Route exact path="/project/data">
            <Data />
          </Route>
          <Route path="/data">
            {/* Short link to project data page. */}
            <Redirect to="/project/data" />
          </Route>
          <Route exact path="/project/partners">
            <Partners />
          </Route>
          <Route path="/partners">
            {/* Short link to project partners page. */}
            <Redirect to="/project/partners" />
          </Route>
          <Route exact path="/login">
            <User />
          </Route>
          <Route exact path="/signup">
            <User />
          </Route>
          <Route exact path="/search">
            TODO Empty search.
          </Route>
          <Route path="/search/:query">
            <Search />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/submit">
            <Submit />
          </Route>
          <Route exact path="/imprint">
            <Imprint />
          </Route>
          <Route exact path="/privacy">
            <Privacy />
          </Route>
          <Route>
            {/* Fallback route if no other route matches. */}
            <UnknownRoute />
          </Route>
        </Switch>
        <AppFooter />
      </Fragment>
    );
  }
}
