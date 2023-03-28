const express = require("express");

const router = express.Router();

router.use("/category", require("./subRoutes/public.category.routes.js"));
router.use("/company", require("./subRoutes/public.company.routes.js"));
router.use("/job", require("./subRoutes/public.job.routes.js"));
router.use("/auth", require("./subRoutes/public.signup.routes.js"));
router.use("/search", require("./subRoutes/public.search.routes.js"));

module.exports = router;
