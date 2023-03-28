const express = require("express");

const companyController = require("../../controllers/company.comtroller");
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
 * /user/company:
 *   get:
 *     summary: Get all companies
 *     tags: [APPLICANT]
 *     security:
 *       - bearerAuth: []
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
router.get("/", isAuth, companyController.getAllCompanies);
/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/company/{id}:
 *   get:
 *     summary: Get company by id
 *     tags: [APPLICANT]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Get company by id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Get company by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
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
router.get("/:id", isAuth, companyController.getCompanyById);

module.exports = router;
