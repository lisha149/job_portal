const express = require("express");

const jobController = require("../../controllers/job.controller");

const { isAuth } = require("../../middleware/auth.middleware");

const router = express.Router();

//both admin and user routes

/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/job:
 *   get:
 *     summary: Get all jobs
 *     tags: [APPLICANT]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Get all jobs.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
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
router.get("/", isAuth, jobController.getAllJobs);
/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/job/{id}:
 *   get:
 *     summary: Get job by id
 *     tags: [APPLICANT]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Get job by id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Get job by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "get job by id."
 *       400:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "failed"
 *       404:
 *         description: some client side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: " failed"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "internal server in error"
 */
router.get("/:id", isAuth, jobController.getJobById);

module.exports = router;
