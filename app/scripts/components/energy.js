import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Button } from "react-materialize";
import addEnergy from "../actions/add_energy.js";
import removeEnergy from "../actions/remove_energy.js";

class Energy extends React.Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
  }

  addHandler(e) {
    e.preventDefault();
    this.props.dispatch(addEnergy());
  }

  removeHandler(e) {
    e.preventDefault();
    this.props.dispatch(removeEnergy());
  }

  nextHandler(e) {
    e.preventDefault();
    this.props.history.push("/results");
  }

  render() {
    return (
      <main>

        <form>
          <div>{this.props.energy}</div>
          <Button
            onClick={this.addHandler}
            floating
            large
            waves="light"
            icon="add"
          />
          <Button
            onClick={this.removeHandler}
            floating
            large
            waves="light"
            icon="remove"
          />
          <Button
            onClick={this.nextHandler}
            large
            waves="light"
            icon="save arrow forward"
          />
        </form>
      </main>
    );
  }
}

export default connect(container.allState)(Energy);
