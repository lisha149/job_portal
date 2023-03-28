const express = require("express");
const jobController = require("../../controllers/job.controller");
const applicationController = require("../../controllers/application.details.controller");
const jobRules = require("../../rules/job.rules");
const validateMiddleware = require("../../middleware/validator.middleware");
const { isAuth, isAdmin } = require("../../middleware/auth.middleware");

const router = express.Router();
//both admin and user routes

/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/job:
 *   get:
 *     summary: Get all jobs
 *     tags: [ADMIN]
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
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/job/{id}:
 *   get:
 *     summary: Get job by id
 *     tags: [ADMIN]
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
//admin routes

/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/job:
 *   post:
 *     summary: Create job
 *     tags: [ADMIN]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 required: true
 *               description:
 *                 type: string
 *                 required: true
 *               vacancyNumber:
 *                 type: string
 *               experience:
 *                 type: string
 *                 required: true
 *               categoryId:
 *                 type: number
 *                 required: true
 *               companyId:
 *                 type: number
 *                 required: true
 *               deadlineDate:
 *                 type: string
 *                 required: true
 *               salary:
 *                 type: number
 *                 required: true
 *     responses:
 *       200:
 *         description: job Created Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "job Created successfully"
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
  isAdmin,
  applicationController.getApplicationByJobId
);

router.post(
  "/",
  isAdmin,
  jobRules(),
  validateMiddleware,
  jobController.createJob
);

/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/job/{id}:
 *   patch:
 *     summary: Update job
 *     tags: [ADMIN]
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
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               vacancyNumber:
 *                 type: string
 *               experience:
 *                 type: string
 *               categoryId:
 *                 type: number
 *               companyId:
 *                 type: number
 *               deadlineDate:
 *                 type: string
 *               salary:
 *                 type: number
 *     responses:
 *       200:
 *         description: job Updated Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "job Updated successfully"
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
router.patch("/:id", isAdmin, jobController.editJob);

/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/job/{id}:
 *   delete:
 *     summary: Delete Job
 *     tags: [ADMIN]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Delete Job
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Job Deleted Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Job Deleted successfully"
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
router.delete("/:id", isAdmin, jobController.destroyJob);

module.exports = router;
