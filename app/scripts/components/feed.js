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
    console.log("loading");
    this.props.dispatch(getFlowees());
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
                        <Icon className="engage-icon">favorite</Icon>
                        Engagement: {answer.engagement}
                      </div>

                      <div className="answer-energy">
                        <Icon className="energy-icon">
                          battery_charging_full
                        </Icon>
                        Energy: {answer.energy}
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
