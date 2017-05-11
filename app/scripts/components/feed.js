import React from "react";
import { connect } from "react-redux";
import { Button, Col, Card, Row, CardPanel, Icon } from "react-materialize";
import _ from "lodash";
import getFlowees from "../actions/get_flowees.js";

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.answers);
    if (this.props.answers.length < 1) {
      this.props.dispatch(getFlowees());
    }
  }

  showHearts(heart) {
    if (heart == 0) {
      return <Icon className="engage-icon-negative">favorite_border</Icon>;
    }
    let newContent = _.fill(new Array(Math.abs(heart)), "heart");
    return newContent.map(num => {
      console.log("no matter");
      if (heart > 0) {
        return <Icon className="engage-icon">favorite</Icon>;
      } else if (heart < 0) {
        return <Icon className="engage-icon-negative">favorite</Icon>;
      } else {
        return <Icon className="engage-icon-negative">favorite_border</Icon>;
      }
    });
  }

  showBattery(battery) {
    if (battery == 0) {
      return (
        <Icon className="energy-icon-negative">
          battery_unknown
        </Icon>
      );
    }
    let newContent = _.fill(new Array(Math.abs(battery)), "battery");
    return newContent.map(num => {
      if (battery > 0) {
        return (
          <Icon className="energy-icon">
            battery_charging_full
          </Icon>
        );
      } else if (battery < 0) {
        return (
          <Icon className="energy-icon-negative">
            battery_alert
          </Icon>
        );
      } else {
        return (
          <Icon className="energy-icon-negative">
            battery_unknown
          </Icon>
        );
      }
    });
  }

  render() {
    let moment = require("moment");
    let sortedAnswers = _.sortBy(this.props.answers, ["created"]).reverse();
    return (
      <div className="feed">
        {sortedAnswers.map((answer, i) => {
          let time = moment(answer.created).format("MMM Do YY, h:mm a");
          return (
            <div key={i}>

              <div className="row">

                <Col m={6} s={12}>
                  <Card
                    className="white hoverable"
                    textClassName="black-text"
                    title={answer.answer}
                  >
                    <div className="card-time">
                      {time}
                    </div>
                    <div className="answers-card">

                      <div className="answer-eng">
                        {this.showHearts(answer.engagement)}
                      </div>
                      <div className="answer-energy">
                        {this.showBattery(answer.energy)}
                      </div>
                    </div>
                  </Card>
                </Col>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect()(Feed);
