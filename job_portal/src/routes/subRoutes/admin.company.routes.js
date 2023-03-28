const express = require("express");

const companyController = require("../../controllers/company.comtroller");
const companyRules = require("../../rules/company.rules");
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
 * /admin/company:
 *   get:
 *     summary: Get all companies
 *     tags: [ADMIN]
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
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/company/{id}:
 *   get:
 *     summary: Get company by id
 *     tags: [ADMIN]
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
//admin routes
/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/company:
 *   post:
 *     summary: Create Company
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
 *               email:
 *                 type: string
 *                 required: true
 *               website:
 *                 type: string
 *               location:
 *                 type: string
 *                 required: true
 *               contactNumber:
 *                 type: number
 *                 required: true
 *     responses:
 *       200:
 *         description: Company Created Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Company Created successfully"
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
  companyRules(),
  validateMiddleware,
  companyController.createCompany
);
/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/company/{id}:
 *   patch:
 *     summary: Edit Company
 *     tags: [ADMIN]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Edit Company
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               website:
 *                 type: string
 *               location:
 *                 type: string
 *               contactNumber:
 *                 type: number
 *     responses:
 *       200:
 *         description: Company Updated Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Company Updated successfully"
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
  validateMiddleware,
  companyController.editCompany
);

/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/company/{id}:
 *   delete:
 *     summary: Delete Company
 *     tags: [ADMIN]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Delete Company
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
 *         description: Company Deleted Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Company Deleted successfully"
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
router.delete("/:id", isAdmin, companyController.destroyCompany);

module.exports = router;
