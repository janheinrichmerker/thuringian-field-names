import { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  HomePage,
  ArchivePage,
  ProjectPage,
  UnknownPage,
  UserPage,
  SearchPage,
  DataPage,
  PartnersPage,
  ImprintPage,
  PrivacyPage,
  DetailsPage,
  SubmitPage,
} from "../routes";
import { AppNav, AppFooter } from ".";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <AppNav />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/project">
            <ProjectPage />
          </Route>
          <Route exact path="/project/archive">
            <ArchivePage />
          </Route>
          <Route path="/archive">
            {/* Short link to project archive page. */}
            <Redirect to="/project/archive" />
          </Route>
          <Route exact path="/project/data">
            <DataPage />
          </Route>
          <Route path="/data">
            {/* Short link to project data page. */}
            <Redirect to="/project/data" />
          </Route>
          <Route exact path="/project/partners">
            <PartnersPage />
          </Route>
          <Route path="/partners">
            {/* Short link to project partners page. */}
            <Redirect to="/project/partners" />
          </Route>
          <Route exact path="/login">
            <UserPage />
          </Route>
          <Route exact path="/signup">
            <UserPage />
          </Route>
          <Route exact path="/search">
            TODO Empty search.
          </Route>
          <Route path="/search/:query">
            <SearchPage />
          </Route>
          <Route path="/details/:id">
            <DetailsPage />
          </Route>
          <Route exact path="/submit">
            <SubmitPage />
          </Route>
          <Route exact path="/imprint">
            <ImprintPage />
          </Route>
          <Route exact path="/privacy">
            <PrivacyPage />
          </Route>
          <Route>
            {/* Fallback route if no other route matches. */}
            <UnknownPage />
          </Route>
        </Switch>
        <AppFooter />
      </Fragment>
    );
  }
}
