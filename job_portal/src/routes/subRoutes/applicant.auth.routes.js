const express = require("express");

const authController = require("../../controllers/auth.controllers");
const tokenController = require("../../controllers/token.user.controller");
const userController = require("../../controllers/user.controllers");
const { isApplicant } = require("../../middleware/auth.middleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/auth:
 *   post:
 *     summary: Login
 *     tags: [APPLICANT]
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
router.post("/", authController.userLogin);

/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/auth/generate-token:
 *   post:
 *     summary: Generate Token if expired
 *     tags: [APPLICANT]
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
router.post("/generate-token", tokenController.generateUserToken);

/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/auth/forgot-password:
 *   post:
 *     summary: Forgot Password
 *     tags: [APPLICANT]
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

router.post("/forgot-password", authController.forgotPasswordApplicant);
/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/auth/reset-password/{token}:
 *   post:
 *     summary: Reset Password
 *     tags: [APPLICANT]
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
router.post("/reset-password/:token", authController.resetPasswordApplicant);

/**
 * @swagger
 * tags:
 *   name: APPLICANT
 *   description: Applicant API
 */
/**
 * @swagger
 * /user/auth/change-password:
 *   put:
 *     summary: Change Password
 *     tags: [APPLICANT]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *               confirmPassword:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Password Changed Successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Password changed successfully"
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
router.put("/change-password", isApplicant, userController.updateUserPassword);

module.exports = router;
