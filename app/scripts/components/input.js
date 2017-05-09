import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Button } from "react-materialize";
import saveAnswer from "../actions/save_answer.js";
import InputNavBar from "./input_navbar.js";
import Engagement from "./engagement.js";
import Energy from "./energy.js";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickEnergy: false,
      clickEngagement: false
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.clickEngagement = this.clickEngagement.bind(this);
    this.clickEnergy = this.clickEnergy.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    console.log("saving input");
    let inputAnswer = this.refs.answer.value;
    this.props.history.push("/engagement");
    this.props.dispatch(saveAnswer(inputAnswer));
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
        <InputNavBar />
        <form onSubmit={this.submitHandler}>
          <div className="modal-buttons">
            <button onClick={this.clickEngagement}>
              Engagement: {this.props.engagement}
            </button>
            <button onClick={this.clickEnergy}>
              Energy: {this.props.energy}
            </button>
          </div>
          <div className="input-field">
            <input
              className="validate input-field"
              ref="answer"
              placeholder="What are you doing?"
            />
          </div>
          <input ref="description" placeholder="Description" />
          <Button large waves="light" icon="save arrow forward" />
        </form>
      </main>
    );
  }
}

export default connect(container.allState)(Input);
