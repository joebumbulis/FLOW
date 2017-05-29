import React from "react";
import { connect } from "react-redux";
import { Button, Col, Card, Row, CardPanel } from "react-materialize";
import _ from "lodash";
import Feed from "./feed.js";
import Graph from "./graph.js";
import getFlowees from "../actions/get_flowees.js";
import NavBar from "./nav_bar.js";

class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Graph answers={this.props.top} />
        <Feed answers={this.props.answers} />
      </div>
    );
  }
}

function giveMeTopAnswers(state, num) {
  return state.answers.slice(0, num);
}

export default connect((state, props) => {
  const days = props.match.params.days ? parseInt(props.match.params.days) : 10;
  return {
    top: giveMeTopAnswers(state, days),
    answers: state.answers
  };
})(HomeFeed);
