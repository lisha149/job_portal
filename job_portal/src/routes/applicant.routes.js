const express = require("express");

const router = express.Router();

router.use("/auth", require("./subRoutes/applicant.auth.routes.js"));
router.use("/category", require("./subRoutes/applicant.category.routes.js"));
router.use("/company", require("./subRoutes/applicant.company.routes.js"));
router.use("/job", require("./subRoutes/applicant.job.routes.js"));
router.use("/applications", require("./subRoutes/applicant.details.routes.js"));
router.use("/profile", require("./subRoutes/profile.routes.js"));

module.exports = router;
