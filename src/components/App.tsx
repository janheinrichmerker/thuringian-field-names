import { Component } from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { Home } from "../routes/Home";
import { Archive } from "../routes/Archive";
import { Project } from "../routes/Project";
import { AppNav } from "./AppNav";
import { AppFooter } from "./AppFooter";
import { UnknownRoute } from "../routes/UnknownRoute";
import { User } from "../routes/User";
import { Search } from "../routes/Search";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store";
import { selectSettingsLocale } from "../store/settings";
import { IntlProvider } from "react-intl";

class _App extends Component<ConnectedProps<typeof connector>> {
  render() {
    return (
      <IntlProvider locale={this.props.locale} key={this.props.locale}>
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
            <Route path="/search/:id" component={Search} />
            <Route>
              <UnknownRoute />
            </Route>
          </Switch>
          <AppFooter />
        </HashRouter>
      </IntlProvider>
    );
  }
}

const connector = connect((state: RootState) => ({
  locale: selectSettingsLocale(state),
}));

export const App = connector(_App);
