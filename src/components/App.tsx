import { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "../routes/HomePage";
import { ArchivePage } from "../routes/ArchivePage";
import { ProjectPage } from "../routes/ProjectPage";
import { AppNav } from "./AppNav";
import { AppFooter } from "./AppFooter";
import { UnknownPage } from "../routes/UnknownPage";
import { UserPage } from "../routes/UserPage";
import { SearchPage } from "../routes/SearchPage";
import { DataPage } from "../routes/DataPage";
import { PartnersPage } from "../routes/PartnersPage";
import { ImprintPage } from "../routes/ImprintPage";
import { PrivacyPage } from "../routes/PrivacyPage";
import { DetailsPage } from "../routes/DetailsPage";
import { SubmitPage } from "../routes/SubmitPage";

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
