import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Route, Link, NavLink } from "react-router-dom";
import { Navbar, Icon, Button } from "react-materialize";
import sendAnswer from "../actions/send_answer.js";

class InputNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.homeClick = this.homeClick.bind(this);
    this.inputClick = this.inputClick.bind(this);
    // this.resultsClick = this.resultsClick.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this);
  }

  homeClick({ history }) {
    console.log("Home Clicked");
    return (
      <h2 className="brand" onClick={() => history.push("/feed")}>flowee</h2>
    );
  }

  inputClick({ history }) {
    console.log("input clicked");
    return (
      <h2 className="cancel" onClick={() => history.push("/feed")}>cancel</h2>
    );
  }

  saveAnswer() {
    this.props.saveAnswer();
  }
  // resultsClick({ history }) {
  //   console.log("results clicked");
  //   onClick={this.saveAnswer};
  //   return <h2 className="save" onClick={() => history.push("/feed")}>save</h2>;
  // }

  render() {
    return (
      <div className="navbar">
        <Route render={this.inputClick} />
        <h2 className="save" onClick={this.saveAnswer}>save</h2>
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

export default connect(container.allState)(InputNavBar);
