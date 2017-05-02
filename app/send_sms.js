// Twilio Credentials
var accountSid = "AC5c8bc6f95b6f6de21aa940fefd03ad9b";
var authToken = "31f11dc89b4716cb08c39086653faa4d";

//require the Twilio module and create a REST client
var client = require("twilio")(accountSid, authToken);

client.messages.create(
  {
    to: "+18179036508",
    from: "+15123097864",
    body: "Hello Joe"
  },
  function(err, message) {
    console.log(message.sid);
  }
);
