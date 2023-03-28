const express = require("express");

const jobController = require("../../controllers/job.controller");

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: PUBLIC
 *   description: Public API
 */
/**
 * @swagger
 * /public/search?job=query}:
 *   get:
 *     summary: Get jobs
 *     tags: [PUBLIC]
 *     parameters:
 *       - in: query
 *         name: job
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Get jobs.
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
router.get("/", jobController.searchJob);
module.exports = router;