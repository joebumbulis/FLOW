/* global Backendless */
/**
* testttt timer.
* It is executed according to the schedule
*/
Backendless.ServerCode.addTimer({
  name: "testttt",
  startDate: 1493674200000,
  frequency: {
    schedule: "custom",
    repeat: { every: 100 }
  },

  /**
  * @param {Object} req
  * @param {String} req.context Application Version Id
  */
  execute(req) {
    console.log("Hi timed message");
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
  }
});
