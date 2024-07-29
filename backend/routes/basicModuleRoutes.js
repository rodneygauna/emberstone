import express from "express";

import {
  createBasicModule,
  getBasicModules,
  getBasicModuleById,
  updateBasicModule,
} from "../../controllers/basicModuleControllers.js";

const router = express.Router();

router.route("/").post(createBasicModule).get(getBasicModules);
router.route("/:id").get(getBasicModuleById).put(updateBasicModule);

export default router;
