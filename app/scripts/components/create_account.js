import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Route, Link, NavLink } from "react-router-dom";
import { Navbar, Icon, Button, Input } from "react-materialize";
import registerNewUser from "../actions/register_new_user.js";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.registerAccount = this.registerAccount.bind(this);
  }

  goBack({ history }) {
    return (
      <button className="login-back" onClick={() => history.push("/open")}>
        Back<Icon className="arrow-icon">keyboard_arrow_left</Icon>
      </button>
    );
  }

  registerAccount(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let name = this.refs.name.value;
    this.props.dispatch(
      registerNewUser(email, password, name, this.props.history)
    );
  }

  render() {
    return (
      <div>
        <nav className="login-navbar">
          <Route render={this.goBack} />
          <h4 className="login-title">Register</h4>
        </nav>
        <form onSubmit={this.registerAccount}>
          <div className="login-inputs input-field">
            <div>
              <i className="material-icons prefix">account_box</i>
              <input
                ref="name"
                type="text"
                placeholder="name"
                className="validate"
              />
            </div>
            <div>
              <i className="material-icons prefix">email</i>
              <input
                ref="email"
                type="email"
                placeholder="email"
                className="validate"
              />
            </div>
            <div>
              <i className="material-icons prefix">lock</i>
              <input
                ref="password"
                type="password"
                placeholder="password"
                className="validate"
              />
            </div>
            <button className="login-btn submit-login">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(CreateAccount);
