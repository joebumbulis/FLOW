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
      <div>
        <h3>Graph</h3>
        {sortedAnswers.map((answer, i) => {
          let time = moment(answer.created).format("MMM Do YY, h:mm a");
          return (
            <div>
              <div className="row">
                <Col m={6} s={12}>
                  <Card
                    className="blue-grey darken-1"
                    textClassName="white-text"
                    title={answer.answer}
                  >
                    {time}
                    Engagement: {answer.engagement}
                    Energy: {answer.energy}
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
