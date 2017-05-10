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
            data: [],
            backgroundColor: "#FA0F4D"
          },
          {
            label: "energy",
            data: [],
            backgroundColor: "#0FFA2E"
          }
        ]
      }
    };
  }

  componentWillMount() {
    this.setProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setProps(nextProps);
  }

  setProps(props) {
    let moment = require("moment");
    var timeArr = props.answers.map((answer, i) => {
      return moment(answer.created).format("MMM Do YY, h:mm a");
    });
    var energyArr = props.answers.map((answer, i) => {
      return answer.energy;
    });
    var engagementArr = props.answers.map((answer, i) => {
      return answer.engagement;
    });

    var dataArr = [energyArr, engagementArr];
    var counter = -1;
    var newDatasets = this.state.data.datasets.map(dataset => {
      counter++;
      return {
        label: dataset.label,
        data: dataArr[counter],
        backgroundColor: dataset.backgroundColor
      };
    });

    var userData = Object.assign({}, this.state.data, {
      labels: timeArr,
      datasets: newDatasets
    });

    this.setState({
      data: userData
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
