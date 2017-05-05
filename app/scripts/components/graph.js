import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    // this.setPropis = this.setPropis.bind(this);
    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            label: "engagement",
            data: [],
            backgroundColor: "#ff512f"
          },
          {
            label: "energy",
            data: [],
            backgroundColor: "#f0e719"
          }
        ]
      }
    };
  }

  componentWillMount() {
    this.setPropis(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setPropis(nextProps);
  }

  setPropis(props) {
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
