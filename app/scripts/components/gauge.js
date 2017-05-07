// #### Gauge
import React from "react";
import { connect } from "react-redux";
import Engagement from "./engagement.js";
// The Gauge object encapsulates the behavior
// of simple gauge. Most of the implementation
// is in the CSS rules, but we do have a bit
// of JavaScript to set or read the gauge value

class Gauge extends React.Component {
  constructor(props) {
    super(props);
  }

  //refer to hold.js for javascript for the gauge.js
  render() {
    return (
      <main>
        <div className="gauge">
          * <div className="gauge__container">
            * <div className="gauge__marker" />
            * <div className="gauge__background" />
            * <div className="gauge__center" />
            * <div className="gauge__data" />
            * <div className="gauge__needle" />
            *{" "}
          </div>
          * <div className="gauge__labels">
            * <span className="gauge__label--low">No</span>
            * <span className="gauge__label--spacer" />
            * <span className="gauge__label--high">Yes</span>
            *{" "}
          </div>
          *{" "}
        </div>
      </main>
    );
  }
}

export default connect()(Gauge);
