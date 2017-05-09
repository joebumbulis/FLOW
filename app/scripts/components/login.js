import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Route, Link, NavLink } from "react-router-dom";
import { Navbar, Icon, Button, Input } from "react-materialize";

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
    let email = e.target[0].value;
    let password = e.target[1].value;
    let emailsss = this.refs.emailsss.value;
    console.log(email, password);
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
            <Input ref="email" type="email" placeholder="email" validate>
              <Icon>email</Icon>
            </Input>
            <i className="material-icons">email</i>
            <input
              ref="emailsss"
              type="email"
              placeholder="emailsss"
              validate
            />
            <Input
              className="pswd-input"
              ref="password"
              type="password"
              placeholder="password"
            >
              <Icon>lock_outline</Icon>
            </Input>
            <button className="login-btn submit-login">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(LogIn);
