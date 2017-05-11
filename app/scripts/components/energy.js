import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Button, Icon } from "react-materialize";
import addEnergy from "../actions/add_energy.js";
import removeEnergy from "../actions/remove_energy.js";
import { Box, Meter, Label, Value } from "grommet";
import _ from "lodash";

class Energy extends React.Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addHandler(e) {
    e.preventDefault();
    this.props.dispatch(addEnergy());
  }

  removeHandler(e) {
    e.preventDefault();
    this.props.dispatch(removeEnergy());
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  showBattery(battery) {
    if (battery == 0) {
      return (
        <Icon medium className="energy-icon-negative">
          battery_unknown
        </Icon>
      );
    }
    let newContent = _.fill(new Array(Math.abs(battery)), "battery");
    return newContent.map(num => {
      if (battery > 0) {
        return (
          <Icon medium className="energy-icon">
            battery_charging_full
          </Icon>
        );
      } else if (battery < 0) {
        return (
          <Icon medium className="energy-icon-negative">
            battery_alert
          </Icon>
        );
      } else {
        return (
          <Icon medium className="energy-icon-negative">
            battery_unknown
          </Icon>
        );
      }
    });
  }

  render() {
    return (
      <main className="modal-container scale-out">
        <div className="modal-box scale-transition">
          <Box responsive={false} align="center">
            <Box
              direction="row"
              justify="between"
              align="center"
              pad={{ between: "small" }}
              responsive={false}
            >
              <Value
                className="title"
                value={this.props.energy}
                units="energy"
              />
            </Box>
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
              <Value value={this.showBattery(this.props.energy)} />
            </Box>
          </Box>
          <form>
            <Button
              className="add-button  red accent-3"
              onClick={this.addHandler}
              floating
              large
              waves="light"
              icon="add"
            />
            <Button
              className="remove-button  red accent-3"
              onClick={this.removeHandler}
              floating
              large
              waves="light"
              icon="remove"
            />
            <div>
              <button onClick={this.closeModal}>cancel</button>
              <button className="ok-btn" onClick={this.closeModal}>OK</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default connect(container.allState)(Energy);
