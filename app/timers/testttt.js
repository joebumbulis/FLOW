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
  }
});
