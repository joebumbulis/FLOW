import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import { Navbar, Icon, Button, NavItem } from "react-materialize";

class NavB extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand="logo" right>
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem><Link to="/contact-us">Contact</Link></NavItem>
        </Navbar>
      </div>
    );
  }
}

export default NavB;
