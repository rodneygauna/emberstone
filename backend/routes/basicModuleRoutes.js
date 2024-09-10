import express from "express";

import {
  createBasicModule,
  getBasicModules,
  getBasicModuleById,
  updateBasicModule,
} from "../controllers/basicModuleControllers.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, createBasicModule)
  .get(protect, getBasicModules);

router
  .route("/:id")
  .get(protect, getBasicModuleById)
  .put(protect, updateBasicModule);

export default router;
