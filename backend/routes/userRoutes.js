import express from "express";
import {
  registerUser,
  authUser,
  userProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/register", registerUser);
router.get("/profile", protect, userProfile);

export default router;
