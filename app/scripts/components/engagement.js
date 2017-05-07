import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Button } from "react-materialize";
import addEngagement from "../actions/add_engagement.js";
import removeEngagement from "../actions/remove_engagement.js";
import Gauge from "./gauge.js";

class Engagement extends React.Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
  }

  addHandler(e) {
    e.preventDefault();
    this.props.dispatch(addEngagement());
  }

  removeHandler(e) {
    e.preventDefault();
    this.props.dispatch(removeEngagement());
  }

  nextHandler(e) {
    e.preventDefault();
    this.props.history.push("/energy");
  }

  render() {
    return (
      <main>
        <Gauge />
        <form>
          <div>{this.props.engagement}</div>
          <Button
            onClick={this.addHandler}
            floating
            large
            waves="light"
            icon="add"
          />
          <Button
            onClick={this.removeHandler}
            floating
            large
            waves="light"
            icon="remove"
          />
          <Button
            onClick={this.nextHandler}
            large
            waves="light"
            icon="save arrow forward"
          />
        </form>
      </main>
    );
  }
}

export default connect(container.allState)(Engagement);
