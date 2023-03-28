const express = require("express");

const profileController = require("../../controllers/profile.controller");
const { isApplicant } = require("../../middleware/auth.middleware");
const { upload } = require("../../config/upload.config");

const router = express.Router();

router.patch("/:id", isApplicant, upload, profileController.editProfile);
router.get("/:id", isApplicant, profileController.getProfileById);

module.exports = router;
