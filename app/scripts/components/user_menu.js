import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Route, Link, NavLink } from "react-router-dom";
import { Icon } from "react-materialize";
import logoutUser from "../actions/logout_user.js";

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.clickLogout = this.clickLogout.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  clickLogout(e) {
    e.preventDefault();
    this.props.dispatch(
      logoutUser(this.props.userInfo["user-token"], this.props.history)
    );
  }

  render() {
    console.log("HELLO");
    return (
      <div className="user-menu-container">
        <ul className="user-menu">
          <li onClick={this.clickLogout}>Log Out</li>
          <button onClick={this.closeModal}>
            <Icon>keyboard_arrow_right</Icon>
          </button>
        </ul>

      </div>
    );
  }
}
export default connect(container.allState)(UserMenu);
