import { createStore } from "redux";
import store from "../store.js";
import saveAnswer from "../actions/save_answer.js";

const initialState = {
  userInfo: {},
  answers: [],
  engagement: 0,
  energy: 0
};

export default function AppReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "LOADED":
      let loadedAnswers = state.answers.slice();
      let savedAnswers = action.answer;
      loadedAnswers.push(savedAnswers);
      return Object.assign({}, state, { answers: loadedAnswers });

    case "USER_LOGGED_IN":
      return Object.assign({}, state, {
        userInfo: action.data
      });

    case "SAVE_ANSWER":
      return Object.assign({}, state, { answer: action.answer });
      console.log(state);

    case "ADD_ENGAGEMENT":
      var newTotal;
      var oldTotal = state.engagement;
      if (oldTotal < 5) {
        newTotal = oldTotal + 1;
      } else {
        newTotal = oldTotal;
      }
      return Object.assign({}, state, { engagement: newTotal });

    case "REMOVE_ENGAGEMENT":
      var newTotal;
      var oldTotal = state.engagement;
      if (oldTotal > -5) {
        newTotal = oldTotal - 1;
      } else {
        newTotal = oldTotal;
      }
      return Object.assign({}, state, { engagement: newTotal });

    case "ADD_ENERGY":
      var newTotal;
      var oldTotal = state.energy;
      if (oldTotal < 5) {
        newTotal = oldTotal + 1;
      } else {
        newTotal = oldTotal;
      }
      return Object.assign({}, state, { energy: newTotal });

    case "REMOVE_ENERGY":
      var newTotal;
      var oldTotal = state.energy;
      if (oldTotal > -5) {
        newTotal = oldTotal - 1;
      } else {
        newTotal = oldTotal;
      }
      return Object.assign({}, state, { energy: newTotal });
  }

  console.log("Unhandled State!");
  return state;
}
