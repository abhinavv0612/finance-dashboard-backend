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