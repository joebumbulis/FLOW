import React from "react";
import { connect } from "react-redux";
import { Line, Bar, Donut } from "react-chartjs-2";
import _ from "lodash";
import { Box, Carousel } from "grommet";

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
    let answers = _.orderBy(props.answers, ["created"], ["asc"]);
    var labelArr = answers.map((answer, i) => {
      return moment(answer.created).format("ddd");
    });
    var energyArr = answers.map((answer, i) => {
      return answer.energy;
    });
    var engagementArr = answers.map((answer, i) => {
      return answer.engagement;
    });

    var dataArr = [engagementArr, energyArr];
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
      labels: labelArr,
      datasets: newDatasets
    });

    this.setState({
      data: userData
    });
  }

  render() {
    return (
      <div>
        <Carousel className="carousel" autoplay={false}>
          <Bar data={this.state.data} />
          <Line data={this.state.data} />
          <Donut data={this.state.data} />
        </Carousel>
      </div>
    );
  }
}

export default Graph;
