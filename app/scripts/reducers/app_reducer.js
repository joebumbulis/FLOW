import { createStore } from "redux";
import store from "../store.js";
import saveAnswer from "../actions/save_answer.js";

const initialState = {};

export default function AppReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "SAVE_ANSWER":
      return Object.assign({}, state, { answer: action.answer });
      console.log(state);
  }

  console.log("Unhandled State!");
  return state;
}
