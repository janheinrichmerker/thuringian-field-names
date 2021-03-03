import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect, ConnectedProps, Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { App } from "./components/App";
import { reportWebVitals } from "./reportWebVitals";
import { RootState, store } from "./store";
import { selectSettingsLocale } from "./store/settings";
import en from "./translations/en.json";
import de from "./translations/de.json";
import "./index.scss";

function loadLocaleData(locale: string) {
  switch (locale.split(/[-_]/)[0]) {
    case "de":
      return de;
    default:
      return en;
  }
}

class Root extends Component {
  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <ConnectedRootApp />
        </Provider>
      </React.StrictMode>
    );
  }
}

class RootApp extends Component<ConnectedProps<typeof connector>> {
  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        messages={loadLocaleData(this.props.locale)}
        key={this.props.locale}
      >
        <HashRouter>
          <App />
        </HashRouter>
      </IntlProvider>
    );
  }
}

const connector = connect((state: RootState) => ({
  locale: selectSettingsLocale(state),
}));

const ConnectedRootApp = connector(RootApp);

ReactDOM.render(<Root />, document.getElementById("root"));

// To measure performance, pass a function to send to an analytics endpoint: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
