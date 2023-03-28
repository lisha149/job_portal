const express = require("express");

const companyController = require("../../controllers/company.comtroller");

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
 * /public/comapany:
 *   get:
 *     summary: Get all companies
 *     tags: [PUBLIC]
 *     responses:
 *       200:
 *         description: Get all companies.
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
router.get("/", companyController.getAllCompanies);
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
 *     summary: Get company by id
 *     tags: [PUBLIC]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Get company by id
 *     responses:
 *       200:
 *         description: Get company by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: object
 *                   example: "get company by id."
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
router.get("/:id", companyController.getCompanyById);

module.exports = router;
