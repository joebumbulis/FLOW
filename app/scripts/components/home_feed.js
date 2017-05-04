import React from "react";
import { connect } from "react-redux";
import { Button, Col, Card, Row, CardPanel } from "react-materialize";
import _ from "lodash";
import Feed from "./feed.js";
import Graph from "./graph.js";

class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Graph answers={this.props.answers} />
        <Feed answers={this.props.answers} />
      </div>
    );
  }
}

export default connect(state => state)(HomeFeed);
