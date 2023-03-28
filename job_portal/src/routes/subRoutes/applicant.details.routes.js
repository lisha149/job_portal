const express = require("express");
const applicationController = require("../../controllers/application.details.controller");

const { isApplicant } = require("../../middleware/auth.middleware");
const { upload } = require("../../config/upload.config");
const router = express.Router();

//applicant routes
/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/apply:
 *   post:
 *     summary: Apply for job
 *     tags: [APPLICANT]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jobId:
 *                 type: number
 *                 required: true
 *               applicantId:
 *                 type: number
 *                 required: true
 *               cv:
 *                 type: string
 *                 required: true
 *               coverLetter:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job Applied Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Job Applied successfully"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Error occured"
 */
router.post(
  "/apply",
  isApplicant,
  upload,
  applicationController.createApplication
);
/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/{id}/applications:
 *   post:
 *     summary: Get Application by id
 *     tags: [APPLICANT]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jobId:
 *                 type: number
 *                 required: true
 *               applicantId:
 *                 type: number
 *                 required: true
 *               cv:
 *                 type: string
 *                 required: true
 *               coverLetter:
 *                 type: string
 *     responses:
 *       200:
 *         description: Get Applications By Id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Success"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Error occured"
 */
router.get(
  "/:id/applications",
  isApplicant,
  applicationController.getApplicantJob
);

module.exports = router;
