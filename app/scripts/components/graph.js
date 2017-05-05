import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            label: "engagement",
            data: [1, 3, 5, 0, 6, 3, 7],
            backgroundColor: "#ff512f"
          },
          {
            label: "energy",
            data: [2, 29, 5, 5, 2, 3, 10],
            backgroundColor: "#f0e719"
          }
        ]
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("YOYUOYOYO", this.props.answers);
    let moment = require("moment");
    var timeArr = this.props.answers.map((answer, i) => {
      return moment(answer.created).format("MMM Do YY, h:mm a");
    });

    var foo = Object.assign({}, this.state.data, { labels: timeArr });
    this.setState({
      data: foo
    });
  }

  render() {
    return (
      <div>
        <Line data={this.state.data} />
      </div>
    );
  }
}

export default Graph;
