var cron = require("node-cron");
const { Job } = require("../models");
const jobServices = require("../services/job.services");

cron.schedule("0 0 * * *", async () => {
  const jobs = await jobServices.getJobs();
  // get today's date
  // converted to ISO String
  // splitted the ISO date by T to get date only and assign the date only
  //db query to get data from db
  //loop
  //map
  //compare each data deadlineDate with today date
  //if today>deadlineDate then db query to change the status
  let today = new Date().toISOString().split("T");
  today = today[0];
  const newToday = new Date(today);
  console.log(newToday)
  jobs.data.map(async (job) => {
    let date = new Date(job.deadlineDate.split("T")[0]);
  
    if (newToday > date) {
      await jobServices.editJob({ status: "Inactive" }, job.id);
    }
  });
  console.log("Job ran succesfully");
});
