import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import { Button } from "react-materialize";
import addEngagement from "../actions/add_engagement.js";
import removeEngagement from "../actions/remove_engagement.js";
import { Box, Meter, Label, Value } from "grommet";

class Engagement extends React.Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addHandler(e) {
    e.preventDefault();
    this.props.dispatch(addEngagement());
  }

  removeHandler(e) {
    e.preventDefault();
    this.props.dispatch(removeEngagement());
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    return (
      <main>
        <div className="modal-box">
          <Box responsive={false} align="center">
            <Meter
              type="arc"
              vertical={false}
              min={0}
              max={10}
              value={this.props.engagement + 5}
              onActive={() => {}}
            />
            <Box
              direction="row"
              justify="between"
              align="center"
              pad={{ between: "small" }}
              responsive={false}
            >
              <Value value={this.props.engagement} units="engagement" />
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

export default connect(container.allState)(Engagement);
