import React from "react";
import { connect } from "react-redux";
import { Button, Col, Card, Row, CardPanel } from "react-materialize";
import _ from "lodash";

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let moment = require("moment");
    let sortedAnswers = _.sortBy(this.props.answers, ["created"]);
    return (
      <div className="feed">
        {sortedAnswers.map((answer, i) => {
          let time = moment(answer.created).format("MMM Do YY, h:mm a");
          return (
            <div key={i}>

              <div className="row">

                <Col m={6} s={12}>
                  <Card
                    className="white"
                    textClassName="black-text"
                    title={answer.answer}
                  >
                    <div className="card-time">
                      {time}
                    </div>
                    <div className="answers-card">
                      <div className="answer-eng">
                        Engagement: {answer.engagement}
                      </div>
                      <div className="answer-energy">
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
