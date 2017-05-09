import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Navbar, Icon, Button } from "react-materialize";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="login-navbar">
          <button className="login-back">
            Back<Icon className="arrow-icon">keyboard_arrow_left</Icon>
          </button>
          <h4 className="login-title">Log In</h4>
          <button className="login-btn">Log In</button>
        </nav>
        <form>
          <div className="login-inputs input-field">
            <input href="email" type="text" placeholder="email" />
            <input href="password" text="password" placeholder="password" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(LogIn);
