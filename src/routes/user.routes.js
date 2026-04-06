import express from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";
import { authorizeRoles } from "../middlewares/rbac.middleware.js";

const router = express.Router();

// Only ADMIN can create users
router.post("/", authorizeRoles("ADMIN"), createUser);

// All roles can view users
router.get("/", authorizeRoles("ADMIN", "ANALYST", "VIEWER"), getUsers);

export default router;