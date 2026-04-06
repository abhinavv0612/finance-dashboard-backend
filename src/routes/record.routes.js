/**
 * @swagger
 * /api/records:
 *   post:
 *     summary: Create financial record
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [amount, type, category, userId]
 *             properties:
 *               amount:
 *                 type: number
 *               type:
 *                 type: string
 *                 example: INCOME
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               userId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Record created successfully
 */

/**
 * @swagger
 * /api/records:
 *   get:
 *     summary: Get financial records
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Records fetched
 */

/**
 * @swagger
 * /api/records/{id}:
 *   put:
 *     summary: Update record
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Record updated
 */

/**
 * @swagger
 * /api/records/{id}:
 *   delete:
 *     summary: Delete record (soft delete)
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Record deleted
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