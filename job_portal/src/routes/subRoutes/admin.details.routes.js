const express = require("express");
const applicationController = require("../../controllers/application.details.controller");

const { isAdmin } = require("../../middleware/auth.middleware");
const router = express.Router();

//admin routes
router.get("/", isAdmin, applicationController.getAllApplication);
router.get("/:id", isAdmin, applicationController.getApplicationById);
router.delete("/:id", isAdmin, applicationController.destroyApplication);
module.exports = router;
