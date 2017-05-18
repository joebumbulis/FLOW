export default function userLogin(email, password, history) {
  return function(dispatch) {
    // dispatch({ type: "STARTING_USER_LOGIN" });
    return $.ajax({
      url: "http://api.backendless.com/v1/users/login",
      type: "POST",
      contentType: "application/json",
      headers: {
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        login: email,
        password: password
      })
    }).then(data => {
      dispatch({ type: "USER_LOGGED_IN", data: data });
      history.push("/feed");
    });
  };
}
