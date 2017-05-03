import React from "react";
import { connect } from "react-redux";
import { Button } from "react-materialize";
import saveAnswer from "../actions/save_answer.js";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    console.log("saving input");
    let inputAnswer = this.refs.answer.value;
    this.props.history.push("/engagement");
    this.props.dispatch(saveAnswer(inputAnswer));
  }

  render() {
    return (
      <main>
        <form onSubmit={this.submitHandler}>
          <input ref="answer" placeholder="What have you done or are doing?" />
          <Button large waves="light" icon="save arrow forward" />
        </form>
      </main>
    );
  }
}

export default connect()(Input);

//need input field and button
//include optional input fields to answer 6 questions: where, who, object, environ, etc
//to do:
// submitHandler to call a function that will save the asnwer into the state
//make the button or the obsubmit to go to the next page on click.89706897897089
