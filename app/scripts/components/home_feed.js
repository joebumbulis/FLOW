import React from "react";
import { connect } from "react-redux";
import { Button, Col, Card, Row, CardPanel } from "react-materialize";
import _ from "lodash";
import Feed from "./feed.js";

class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Feed answers={this.props.answers} />;
  }
}

export default connect(state => state)(HomeFeed);
