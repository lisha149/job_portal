const express = require("express");

const categoryController = require("../../controllers/category.controller");
const categoryRules = require("../../rules/category.rules");
const validateMiddleware = require("../../middleware/validator.middleware");
const { isAuth, isAdmin } = require("../../middleware/auth.middleware");

const router = express.Router();

//both user and admin routes

/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/category:
 *   get:
 *     summary: Get all categories
 *     tags: [ADMIN]
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
 * /admin/category/{id}:
 *   get:
 *     summary: Get category by id
 *     tags: [ADMIN]
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

//admin routes

/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/category:
 *   post:
 *     summary: Create Category
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
 *               name:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Category Created Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category Created successfully"
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
  "/",
  isAdmin,
  categoryRules(),
  validateMiddleware,
  categoryController.createCategory
);

/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/category/{id}:
 *   patch:
 *     summary: Edit Category
 *     tags: [ADMIN]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Edit Category
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
 *         description: Category Updated Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category Updated successfully"
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
router.patch(
  "/:id",
  isAdmin,
  categoryRules(),
  validateMiddleware,
  categoryController.editCategory
);
/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/category/{id}:
 *   delete:
 *     summary: Delete Category
 *     tags: [ADMIN]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Delete Category
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
 *         description: Category Deleted Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category Deleted successfully"
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
router.delete("/:id", isAdmin, categoryController.destroyCategory);

module.exports = router;
