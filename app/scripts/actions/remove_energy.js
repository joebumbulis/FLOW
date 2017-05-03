export default function removeEnergy() {
  return dispatch => {
    dispatch({ type: "REMOVE_ENERGY" });
  };
}
