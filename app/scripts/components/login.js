import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Route, Link, NavLink } from "react-router-dom";
import { Navbar, Icon, Button, Input } from "react-materialize";
import sendLogIn from "../actions/send_login.js";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);
  }

  goBack({ history }) {
    return (
      <button className="login-back" onClick={() => history.push("/open")}>
        Back<Icon className="arrow-icon">keyboard_arrow_left</Icon>
      </button>
    );
  }

  logIn(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    this.props.dispatch(sendLogIn(email, password, this.props.history));
  }

  render() {
    return (
      <div>
        <nav className="login-navbar">
          <Route render={this.goBack} />
          <h4 className="login-title">Log In</h4>
        </nav>
        <form onSubmit={this.logIn}>
          <div className="login-inputs input-field">
            <div>
              <i className="material-icons prefix input-icon">email</i>
              <input
                ref="email"
                type="email"
                placeholder="email"
                className="validate"
              />
            </div>
            <div>
              <i className="material-icons prefix input-icon">lock</i>
              <input
                ref="password"
                type="password"
                placeholder="password"
                className="validate"
              />
            </div>
            <button className="login-btn submit-login">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(LogIn);
