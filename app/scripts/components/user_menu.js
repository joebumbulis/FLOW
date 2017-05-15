import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <ul>
          <li>Log Out</li>
        </ul>
        <button onClick={this.closeModal}>cancel</button>
      </div>
    );
  }
}
export default userMenu;
