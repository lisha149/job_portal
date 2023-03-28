const express = require("express");

const router = express.Router();

router.use("/auth", require("./subRoutes/admin.auth.routes.js"));
router.use("/category", require("./subRoutes/admin.category.routes.js"));
router.use("/company", require("./subRoutes/admin.company.routes.js"));
router.use("/job", require("./subRoutes/admin.job.routes.js"));
router.use("/applications", require("./subRoutes/admin.details.routes.js"));

module.exports = router;
