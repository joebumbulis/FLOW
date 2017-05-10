import React from "react";
import container from "../containers/all.js";
import { connect } from "react-redux";
import getFlowees from "../actions/get_flowees.js";

export default function sendAnswers(
  answer,
  engagement,
  energy,
  description,
  user,
  history
) {
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
        energy: energy,
        description: description,
        ownerId: user
      })
    }).then((data, response) => {
      console.log(data, response);
      dispatch({ type: "CLEAR_ALL_INPUTS" });

      history.push("/feed");
    });
  };
}
connect(container.allState);
