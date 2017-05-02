import React from "react";
import { connect } from "react-redux";
import { Button } from "react-materialize";
import saveAnswer from "../actions/save_answer.js";

class Engagement extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    console.log("saving input");
    let inputAnswer = this.refs.answer.value;
    this.props.history.push("/");
    this.props.dispatch(saveAnswer(inputAnswer));
  }

  render() {
    return (
      <main>
        <form onSubmit={this.submitHandler}>
          <input ref="answer" placeholder="What have you done or are doing?" />
          <Button floating large waves="light" icon="add" />
          <Button floating large waves="light" icon="remove" />
        </form>
      </main>
    );
  }
}

export default connect()(Engagement);
