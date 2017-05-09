import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Button } from "react-materialize";
import addEnergy from "../actions/add_energy.js";
import removeEnergy from "../actions/remove_energy.js";
import { Box, Meter, Label, Value } from "grommet";

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
      <main className="modal-container">
        <div className="modal-box">
          <Box responsive={false} align="center">
            <Meter
              type="arc"
              vertical={false}
              min={0}
              max={10}
              value={this.props.energy + 5}
              onActive={() => {}}
            />
            <Box
              direction="row"
              justify="between"
              align="center"
              pad={{ between: "small" }}
              responsive={false}
            >
              <Value value={this.props.energy} units="energy" />
            </Box>
          </Box>
          <form>
            <Button
              className="add-button green accent-3"
              onClick={this.addHandler}
              floating
              large
              waves="light"
              icon="add"
            />
            <Button
              className="remove-button"
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
        </div>
      </main>
    );
  }
}

export default connect(container.allState)(Energy);
