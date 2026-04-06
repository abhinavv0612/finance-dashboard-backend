import express from "express";
import { createRecord, getRecords, updateRecord, deleteRecord } from "../controllers/record.controller.js";
import { authorizeRoles } from "../middlewares/rbac.middleware.js";

const router = express.Router();

// ANALYST + ADMIN can create
router.post("/", authorizeRoles("ADMIN", "ANALYST"), createRecord);

// All can view
router.get("/", authorizeRoles("ADMIN", "ANALYST", "VIEWER"), getRecords);

// ADMIN + ANALYST can update
router.put("/:id", authorizeRoles("ADMIN", "ANALYST"), updateRecord);

// Only ADMIN can delete
router.delete("/:id", authorizeRoles("ADMIN"), deleteRecord);

export default router;