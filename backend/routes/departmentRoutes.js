import express from "express";

import {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
} from "../controllers/departmentControllers.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createDepartment).get(protect, getDepartments);

router
  .route("/:id")
  .get(protect, getDepartmentById)
  .put(protect, updateDepartment);

export default router;
