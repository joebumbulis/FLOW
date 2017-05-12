import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import { Navbar, Icon, Button } from "react-materialize";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.homeClick = this.homeClick.bind(this);
    this.inputClick = this.inputClick.bind(this);
  }

  homeClick({ history }) {
    console.log("Home Clicked");
    return (
      <h2 className="brand" onClick={() => history.push("/feed")}>flowee</h2>
    );
  }

  inputClick({ history }) {
    console.log("input clicked");
    return <h2 className="input" onClick={() => history.push("/input")}>+</h2>;
  }

  render() {
    return (
      <div className="navbar">
        <Route render={this.inputClick} />
        <Route render={this.homeClick} />
      </div>
    );
  }
}

export default NavBar;
