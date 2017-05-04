import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import NavBar from "./nav_bar.js";
import HomeFeed from "./home_feed.js";
import getFlowees from "../actions/get_flowees.js";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("loading");
    this.props.dispatch(getFlowees());
  }

  render() {
    return (
      <main>
        <NavBar />
        <HomeFeed answers={this.props.answers} />
        <section />
      </main>
    );
  }
}

export default connect(state => state)(AppRoot);
