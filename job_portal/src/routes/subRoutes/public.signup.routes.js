const express = require("express");

const authController = require("../../controllers/auth.controllers");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: PUBLIC
 *   description: Public API
 */
/**
 * @swagger
 * /public/auth/signup:
 *   post:
 *     summary: Signup
 *     tags: [PUBLIC]
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
 *               password:
 *                 type: string
 *                 required: true
 *               gender:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Signed up Succcessful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Signed up successfully"
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: "Signed up error"
 */

router.post("/signup", authController.register);
module.exports = router;
