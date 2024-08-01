import express from "express";

import {
  createStation,
  getStations,
  getStationById,
  updateStation,
} from "../controllers/stationControllers.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createStation).get(protect, getStations);

router.route("/:id").get(protect, getStationById).put(protect, updateStation);

export default router;
