const express = require("express");

const authController = require("../../controllers/auth.controllers");
const tokenController = require("../../controllers/token.admin.controller");

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/auth:
 *   post:
 *     summary: Login
 *     tags: [ADMIN]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Logged In Succcessful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logeed in successfully"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Logeed in error"
 */
router.post("/", authController.adminLogin);

/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/auth/generate-token:
 *   post:
 *     summary: Generate Token
 *     tags: [ADMIN]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Token Generated Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Token Generated successfully"
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
router.post("/generate-token", tokenController.generateAdminToken);
/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/auth/forgot-password:
 *   post:
 *     summary: Forgot Password
 *     tags: [ADMIN]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Check your email.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Check your email to reset password"
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
router.post("/forgot-password", authController.forgotPasswordAdmin);

/**
 * @swagger
 * tags:
 *   name: ADMIN
 *   description: Admin API
 */
/**
 * @swagger
 * /admin/auth/reset-password/{token}:
 *   post:
 *     summary: Reset Password
 *     tags: [ADMIN]
 *     parameters:
 *       - in: path
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *                 required: true
 *               confirmPassword:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Reset Password Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Reset Password Successfully"
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
router.post("/reset-password/:token", authController.resetPasswordAdmin);
module.exports = router;
