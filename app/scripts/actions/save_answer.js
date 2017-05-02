export default function saveAnswer(answer) {
  return dispatch => {
    console.log(answer);
    dispatch({ type: "SAVE_ANSWER", answer: answer });
  };
}
