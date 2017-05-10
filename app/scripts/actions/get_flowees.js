export default function getFlowees() {
  return function(dispatch, getState) {
    const url = "https://api.backendless.com/v1/data/flowee";
    let user = getState().userInfo.ownerId;
    return $.ajax({
      type: "GET",
      dataType: "json",
      url: `${url}?where=ownerId%3D%27${user}%27`,
      headers: {
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00"
      }
    }).then(data => {
      console.log(data);
      data.data.forEach(answer => {
        dispatch({ type: "LOADED", answer: answer });
      });
    });
  };
}
