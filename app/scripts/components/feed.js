import React from "react";
import { connect } from "react-redux";
import { Button, Col, Card, Row, CardPanel, Icon } from "react-materialize";
import _ from "lodash";
import getFlowees from "../actions/get_flowees.js";
import deletePost from "../actions/delete_post.js";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.clickDelete = this.clickDelete.bind(this);
  }

  componentDidMount() {
    if (this.props.answers.length < 1) {
      this.props.dispatch(getFlowees());
    }
  }


  clickDelete(answer, e) {
    this.props.dispatch(deletePost(answer));
  }

  showHearts(heart) {
    if (heart == 0) {
      return <Icon className="engage-icon-negative">favorite_border</Icon>;
    }
    let newContent = _.fill(new Array(Math.abs(heart)), "heart");
    return newContent.map(num => {
      if (heart > 0) {
        return <Icon className="engage-icon">favorite</Icon>;
      } else if (heart < 0) {
        return <Icon className="engage-icon-negative">favorite</Icon>;
      }
    });
  }

  showBattery(battery) {
    if (battery == 0) {
      return (
        <Icon className="energy-icon-negative">
          battery_std
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
      }
    });
  }

  render() {
    let moment = require("moment");
    let sortedAnswers = _.orderBy(this.props.answers, ["created"], ["desc"]);
    return (
      <div className="feed">
        {sortedAnswers.map((answer, i) => {
          let time = moment(answer.created).format("MMM Do YYYY, h:mm a");
          return (
            <div key={i}>

              <div className="row">

                <Col l={6} m={12} s={12}>
                  <Card
                    className="white hoverable"
                    textClassName="black-text"
                    title={answer.answer}
                  >

                    <div className="card-time">
                      {time}
                    </div>
                    <div className="edit-icons">
                      <Icon className="edit-icon">mode_edit</Icon>
                      <Icon className="delete-icon">
                        <div onClick={this.clickDelete.bind(this, answer)}>
                          delete_forever
                        </div>
                      </Icon>
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
