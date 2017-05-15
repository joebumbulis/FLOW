export default function userLogout(token, history) {
  return function(dispatch) {
    return $.ajax({
      url: "http://api.backendless.com/v1/users/logout",
      method: "GET",
      contentType: "application/json",
      headers: {
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        "user-token": token,
        "application-type": "REST"
      }
    }).then(data => {
      console.log("LogOut Response:", data);
      dispatch({ type: "CLEAR_USER" });
      history.push("/login");
    });
  };
}
