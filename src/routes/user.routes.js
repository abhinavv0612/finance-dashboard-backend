/**
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create user (ADMIN only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, role]
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *                 example: VIEWER
 *     responses:
 *       201:
 *         description: User created
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */




import express from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";
import { authorizeRoles } from "../middlewares/rbac.middleware.js";
import { authenticate } from "../middlewares/auth.middleware.js"; // 👈 ADD THIS

const router = express.Router();

// 🔥 Only ADMIN can create user
router.post(
  "/",
  authenticate,              
  authorizeRoles("ADMIN"),   
  createUser
);

// 🔥 All roles can view users
router.get(
  "/",
  authenticate,
  authorizeRoles("ADMIN", "ANALYST", "VIEWER"),
  getUsers
);

export default router;