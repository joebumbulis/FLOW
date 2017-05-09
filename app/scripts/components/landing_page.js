import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  createAccount({ history }) {
    console.log("input clicked");
    return (
      <button
        className="create-btn"
        onClick={() => history.push("/create_account")}
      >
        Create an Account
      </button>
    );
  }

  login({ history }) {
    console.log("input clicked");
    return (
      <button className="login-btn" onClick={() => history.push("/login")}>
        Log In
      </button>
    );
  }

  render() {
    return (
      <main className="landing-page">
        <h1 className="welcome-brand">flowee</h1>
        <div className="buttons">
          <Route render={this.createAccount} />
          <Route render={this.login} />
        </div>
      </main>
    );
  }
}

export default LandingPage;
