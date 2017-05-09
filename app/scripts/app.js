import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Input from "./components/input.js";
import Results from "./components/results.js";
import Engagement from "./components/engagement.js";
import Energy from "./components/energy.js";
import HomeFeed from "./components/home_feed.js";
import LandingPage from "./components/landing_page.js";
import CreateAccount from "./components/create_account.js";
import LogIn from "./components/login.js";

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={AppRoot} />
          <Route exact path="/feed" component={HomeFeed} />
          <Route exact path="/create_account" component={CreateAccount} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/open" component={LandingPage} />
          <Route exact path="/input" component={Input} />
          <Route exact path="/engagement" component={Engagement} />
          <Route exact path="/energy" component={Energy} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
