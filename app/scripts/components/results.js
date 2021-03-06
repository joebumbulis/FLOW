import React from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Button } from "react-materialize";
import sendAnswer from "../actions/send_answer.js";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.saveHandle = this.saveHandle.bind(this);
  }

  saveHandle(e) {
    e.preventDefault;
    let answer = this.props.answer;
    let engagement = this.props.engagement;
    let energy = this.props.energy;
    this.props.dispatch(sendAnswer(answer, engagement, energy));
  }

  render() {
    return (
      <section>

        <h2>Results</h2>
        <div>
          <h3>Your Activity:</h3>
          <h3>{this.props.answer}</h3>
          <h3>Engagement:</h3>
          <h3>{this.props.engagement}</h3>
          <h3>Energy:</h3>
          <h3>{this.props.energy}</h3>
          <Button
            onClick={this.saveHandle}
            large
            waves="light"
            icon="save arrow forward"
          />
        </div>
      </section>
    );
  }
}

export default connect(container.allState)(Results);
