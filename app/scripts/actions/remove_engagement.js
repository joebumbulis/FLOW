export default function removeEngagement() {
  return dispatch => {
    dispatch({ type: "REMOVE_ENGAGEMENT" });
  };
}
