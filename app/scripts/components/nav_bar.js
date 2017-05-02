import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Icon,
  Button,
  NavItem,
  SideNav,
  SideNavItem
} from "react-materialize";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.homeClick = this.homeClick.bind(this);
    this.inputClick = this.inputClick.bind(this);
    this.resultsClick = this.resultsClick.bind(this);
  }

  homeClick({ history }) {
    console.log("Home Clicked");
    return <h2 onClick={() => history.push("/")}>Home</h2>;
  }

  inputClick({ history }) {
    console.log("input clicked");
    return <h2 onClick={() => history.push("/input")}>FLOWEE</h2>;
  }

  resultsClick({ history }) {
    console.log("results clicked");
    return <h2 onClick={() => history.push("/results")}>Results</h2>;
  }

  render() {
    return (
      <div>
        <nav className="navbar" role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id="menu">
              <Route render={this.homeClick} />
              <Route render={this.inputClick} />
              <Route render={this.resultsClick} />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
