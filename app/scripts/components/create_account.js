import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Hello</h4>
      </div>
    );
  }
}

export default connect()(CreateAccount);
