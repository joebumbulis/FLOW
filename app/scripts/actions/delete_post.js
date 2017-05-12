import React from "react";
import container from "../containers/all.js";
import { connect } from "react-redux";
import getFlowees from "../actions/get_flowees.js";

export default function deletePost(answer) {
  let id = answer.objectId;
  console.log(answer);
  return function(dispatch) {
    return $.ajax({
      method: "DELETE",
      url: "https://api.backendless.com/v1/data/flowee/" + id,
      headers: {
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00"
      }
    }).then((data, response) => {
      console.log(data);
      dispatch({ type: "DELETE_POST", answer: answer });
    });
  };
}
