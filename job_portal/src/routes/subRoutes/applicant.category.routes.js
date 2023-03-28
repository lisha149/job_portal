const express = require("express");

const categoryController = require("../../controllers/category.controller");

const { isAuth } = require("../../middleware/auth.middleware");

const router = express.Router();

//both user and admin routes

/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/category:
 *   get:
 *     summary: Get all categories
 *     tags: [APPLICANT]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Get all categories.
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
router.get("/", isAuth, categoryController.getAllCategories);
/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/category/{id}:
 *   get:
 *     summary: Get category by id
 *     tags: [APPLICANT]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Get category by id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Get category by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "get category by id."
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
router.get("/:id", isAuth, categoryController.getCategoryById);

module.exports = router;
