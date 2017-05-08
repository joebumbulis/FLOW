import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import { Navbar, Icon, Button } from "react-materialize";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.homeClick = this.homeClick.bind(this);
    this.inputClick = this.inputClick.bind(this);
    // this.resultsClick = this.resultsClick.bind(this);
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

  // resultsClick({ history }) {
  //   console.log("results clicked");
  //   return <h2 onClick={() => history.push("/results")}>Results</h2>;
  // }

  render() {
    return (
      <div className="navbar">
        <Route render={this.inputClick} />
        <Route render={this.homeClick} />
      </div>
    );

    // <div className="row">
    //   <nav className="navbar" role="navigation">
    //     <div className="menuToggle" id="menuToggle">
    //       <input type="checkbox" />
    //       <span />
    //       <span />
    //       <span />
    //       <ul id="menu">
    //         <Route render={this.homeClick} />
    //         <Route render={this.inputClick} />
    //         <Route render={this.resultsClick} />
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
  }
}

export default NavBar;
