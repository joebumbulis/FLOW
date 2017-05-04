import React from "react";
import { connect } from "react-redux";
import { Button, Col, Card, Row, CardPanel } from "react-materialize";

class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Graph</h3>
        {this.props.answers.map((answer, i) => {
          return (
            <div>

              <div className="row">
                <Col m={3} s={12}>
                  <Card
                    className="blue-grey darken-1"
                    textClassName="white-text"
                    title="Card title"
                    actions={[<a href="#">This is a link</a>]}
                  >
                    {answer.answer}
                  </Card>
                </Col>;
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect()(HomeFeed);
