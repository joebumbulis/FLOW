import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Input from "./components/input.js";
import Results from "./components/results.js";
import NavBar from "./components/nav_bar.js";
import Engagement from "./components/engagement.js";
import Energy from "./components/energy.js";

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Route path="/" component={AppRoot} />
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
