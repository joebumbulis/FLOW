import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import NavBar from "./nav_bar.js";
import HomeFeed from "./home_feed.js";
import LandingPage from "./landing_page.js";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <main />;
  }
}

export default connect(state => state)(AppRoot);
