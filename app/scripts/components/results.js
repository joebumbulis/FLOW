import React from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Button } from "react-materialize";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            label: "apples",
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgba(153,255,51,0.4)"
          },
          {
            label: "oranges",
            data: [2, 29, 5, 5, 2, 3, 10],
            backgroundColor: "rgba(255,153,0,0.4)"
          }
        ]
      }
    };
    this.saveHandle = this.saveHandle.bind(this);
  }

  saveHandle(e) {
    e.preventDefault;
  }

  render() {
    return (
      <section>
        <Doughnut data={this.state.data} /> <h2>Results</h2>
        <div>
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
