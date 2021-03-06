import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import { Navbar, Icon, Button } from "react-materialize";
import UserMenu from "./user_menu.js";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMenu: false
    };

    this.homeClick = this.homeClick.bind(this);
    this.inputClick = this.inputClick.bind(this);
    this.clickProfile = this.clickProfile.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  homeClick({ history }) {
    return (
      <h2 className="brand" onClick={() => history.push("/feed")}>flowee</h2>
    );
  }

  inputClick({ history }) {
    return <h2 className="input" onClick={() => history.push("/input")}>+</h2>;
  }

  clickProfile(e) {
    e.preventDefault;
    this.setState({
      userMenu: true
    });
  }

  closeModal() {
    this.setState({
      userMenu: false
    });
  }

  render() {
    var modal = "";
    if (this.state.userMenu) {
      modal = (
        <Route
          render={({ history }) => (
            <UserMenu history={history} closeModal={this.closeModal} />
          )}
        />
      );
    }
    return (
      <div className="navbar">
        {modal}
        <div onClick={this.clickProfile}>
          <Icon className="profile-dropdown-menu">
            perm_identity
          </Icon>
        </div>
        <Route render={this.inputClick} />
        <Route render={this.homeClick} />
      </div>
    );
  }
}

export default NavBar;
