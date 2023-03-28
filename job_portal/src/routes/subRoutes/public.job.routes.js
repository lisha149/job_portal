const express = require("express");

const jobController = require("../../controllers/job.controller");

const router = express.Router();
//pubic routes

/**
 * @swagger
 * tags:
 *   name: PUBLIC
 *   description: Public API
 */
/**
 * @swagger
 * /public/job:
 *   get:
 *     summary: Get all jobs
 *     tags: [PUBLIC]
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
router.get("/", jobController.getAllJobs);
/**
 * @swagger
 * tags:
 *   name: PUBLIC
 *   description: Public API
 */
/**
 * @swagger
 * /public/job/{id}:
 *   get:
 *     summary: Get job by id
 *     tags: [PUBLIC]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Get job by id
 *     responses:
 *       200:
 *         description: Get job by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: object
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
router.get("/:id", jobController.getJobById);
/**
 * @swagger
 * tags:
 *   name: PUBLIC
 *   description: Public API
 */
/**
 * @swagger
 * /public/category/{id}:
 *   get:
 *     summary: Get job by category id
 *     tags: [PUBLIC]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Get job by category id
 *     responses:
 *       200:
 *         description: Get job by category id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: object
 *                   example: "get job by category id."
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
router.get("/category/:id", jobController.getJobByCategoryId);
/**
 * @swagger
 * tags:
 *   name: PUBLIC
 *   description: Public API
 */
/**
 * @swagger
 * /public/company/{id}:
 *   get:
 *     summary: Get job by company id
 *     tags: [PUBLIC]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Get job by company id
 *     responses:
 *       200:
 *         description: Get job by company id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: object
 *                   example: "get job by company id."
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
router.get("/company/:id", jobController.getJobByCompanyId);

module.exports = router;
