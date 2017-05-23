import userLogin from "./send_login.js";

export default function registerNewUser(email, password, name, history) {
  return function(dispatch) {
    $.ajax({
      url: "http://api.backendless.com/v1/users/register",
      method: "POST",
      contentType: "application/json",
      headers: {
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        email: email,
        password: password,
        name: name
      }),
      error: function(statusText) {
        console.log(statusText);

        history.push("/login");
      }
    }).then((data, success, xhr) => {
      console.log("response");
      console.log(data, success);
      dispatch(userLogin(email, password, history));
    });
  };
}
