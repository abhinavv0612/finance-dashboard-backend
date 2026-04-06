/**
 * @swagger
 * /api/records:
 *   get:
 *     summary: Get financial records
 *     tags: [Records]
 */

/**
 * @swagger
 * /api/records:
 *   post:
 *     summary: Create financial record
 *     tags: [Records]
 */

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get dashboard summary
 *     tags: [Dashboard]
 */




import express from "express";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} from "../controllers/record.controller.js";

import { authorizeRoles } from "../middlewares/rbac.middleware.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeRoles("ADMIN", "ANALYST"),
  createRecord
);

router.get(
  "/",
  authenticate,
  authorizeRoles("ADMIN", "ANALYST", "VIEWER"),
  getRecords
);

router.put(
  "/:id",
  authenticate,
  authorizeRoles("ADMIN", "ANALYST"),
  updateRecord
);

router.delete(
  "/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  deleteRecord
);

export default router; 