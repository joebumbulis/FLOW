import React from "react";
import container from "../containers/all.js";
import { connect } from "react-redux";

export default function sendAnswers(answer, engagement, energy) {
  return function(dispatch) {
    // dispatch({ type: "GET_NOTES" });
    return $.ajax({
      type: "POST",
      dataType: "json",
      url: "https://api.backendless.com/v1/data/flowee",
      headers: {
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        answer: answer,
        engagement: engagement,
        energy: energy
      })
    }).then((data, response) => {
      console.log("there", response);
      // dispatch({ type: "CONFIRM_SAVED" });
    });
  };
}
connect(container.allState);
