const express = require("express");

const router = express.Router();

const adminRoutes = require("../routes/admin.routes");
const applicantRoutes = require("../routes/applicant.routes");
const publicRoutes = require("../routes/public.routes");

router.use("/admin", adminRoutes);
router.use("/user", applicantRoutes);
router.use("/public", publicRoutes);

module.exports = router;
