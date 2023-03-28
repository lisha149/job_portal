const express = require("express");

const categoryController = require("../../controllers/category.controller");

const router = express.Router();

//public routes
/**
 * @swagger
 * tags:
 *   name: PUBLIC
 *   description: Public API
 */
/**
 * @swagger
 * /public/category:
 *   get:
 *     summary: Get all categories
 *     tags: [PUBLIC]
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
router.get("/", categoryController.getAllCategories);

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
 *     summary: Get category by id
 *     tags: [PUBLIC]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Get category by id
 *     responses:
 *       200:
 *         description: Get category by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: object
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
router.get("/:id", categoryController.getCategoryById);

module.exports = router;
