import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Button } from "react-materialize";
import InputNavBar from "./input_navbar.js";
import Engagement from "./engagement.js";
import Energy from "./energy.js";
import sendAnswer from "../actions/send_answer.js";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickEnergy: false,
      clickEngagement: false
    };
    this.clickEngagement = this.clickEngagement.bind(this);
    this.clickEnergy = this.clickEnergy.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this);
  }

  clickEngagement(e) {
    e.preventDefault();
    console.log("clicked engagement");
    this.setState({
      clickEngagement: true
    });
  }

  clickEnergy(e) {
    e.preventDefault();
    console.log("clicked energy");
    this.setState({
      clickEnergy: true
    });
  }

  closeModal() {
    this.setState({
      clickEnergy: false,
      clickEngagement: false
    });
  }

  saveAnswer() {
    console.log("clicked save answer");
    let answer = this.refs.answer.value;
    let engagement = this.props.engagement;
    let energy = this.props.energy;
    let description = this.refs.description.value;
    let user = this.props.userInfo.ownerId;
    console.log(user);
    if (answer === "") {
      this.refs.answer.focus();
    } else {
      this.props.dispatch(
        sendAnswer(
          answer,
          engagement,
          energy,
          description,
          user,
          this.props.history
        )
      );
    }
  }

  render() {
    var modal = "";
    if (this.state.clickEngagement) {
      modal = <Engagement closeModal={this.closeModal} />;
    }
    if (this.state.clickEnergy) {
      modal = <Energy closeModal={this.closeModal} />;
    }
    return (
      <main className="input-page">
        {modal}
        <InputNavBar saveAnswer={this.saveAnswer} />
        <form onSubmit={this.submitHandler}>
          <div className="modal-buttons">
            <button onClick={this.clickEngagement}>
              Engagement:
              {" "}
              <span className="number-value">{this.props.engagement}</span>
            </button>
            <button onClick={this.clickEnergy}>
              Energy: <span className="number-value">{this.props.energy}</span>
            </button>
          </div>
          <div className="input-field">
            <input
              type="text"
              className="validate"
              required
              ref="answer"
              placeholder="What are you doing?"
            />
            <input
              className="description"
              type="text"
              ref="description"
              placeholder="Description"
            />
          </div>
        </form>
      </main>
    );
  }
}

export default connect(container.allState)(Input);
