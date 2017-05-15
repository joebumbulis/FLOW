import { createStore } from "redux";
import store from "../store.js";
import saveAnswer from "../actions/save_answer.js";
import _ from "lodash";

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
    case "FIND_LOGIN":
      let token = window.localStorage.getItem("user-token");
      if (token) {
        return Object.assign({}, state, {
          userInfo: Object.assign({}, state.userInfo, {
            "user-token": token,
            ownerId: window.localStorage.getItem("ownerId")
          })
        });
      } else {
        return state;
      }

    case "LOADED":
      let loadedAnswers = state.answers.slice();
      let savedAnswers = action.answer;
      loadedAnswers.push(savedAnswers);
      return Object.assign({}, state, { answers: loadedAnswers });

    case "USER_LOGGED_IN":
      window.localStorage.setItem("user-token", action.data["user-token"]);
      window.localStorage.setItem("ownerId", action.data.ownerId);
      return Object.assign({}, state, {
        userInfo: action.data
      });

    case "CLEAR_USER":
      window.localStorage.setItem("user-token", null);
      window.localStorage.setItem("ownerId", null);
      return Object.assign({}, state, {
        userInfo: {},
        answers: []
      });

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

    case "CLEAR_INPUTS":
      var newState = {
        engagement: 0,
        energy: 0
      };
      return Object.assign({}, state, newState);

    case "CLEAR_ALL_INPUTS":
      var newState = {
        answers: [],
        engagement: 0,
        energy: 0
      };
      return Object.assign({}, state, newState);

    case "DELETE_POST":
      let oldAnswers = state.answers.slice();
      let removeAnswer = action.answer;
      let newAnswers = _.without(oldAnswers, removeAnswer);
      return Object.assign({}, state, { answers: newAnswers });
      console.log(newAnswers);
  }

  console.log("Unhandled State!");
  return state;
}
