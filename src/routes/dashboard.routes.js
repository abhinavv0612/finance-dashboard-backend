import express from "express";
import { getDashboard } from "../controllers/dashboard.controller.js";
import { authorizeRoles } from "../middlewares/rbac.middleware.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

// All roles can view dashboard
router.get(
  "/",
  authenticate,
  authorizeRoles("ADMIN", "ANALYST", "VIEWER"),
  getDashboard
);

export default router;