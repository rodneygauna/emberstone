import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import { protect } from "../middleware/authMiddleware.js";

const SALT = await bcrypt.genSalt(10);

// @desc    Register a new user
// @route   POST /api/v1/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, password, is_active, user_role } =
    req.body;

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Generate a salt and hash the password
  const hashedPassword = await bcrypt.hash(password, SALT);

  // Create new user
  const user = await User.create({
    first_name,
    last_name,
    email,
    password_hash: hashedPassword,
    is_active: is_active || true,
    user_role: user_role || "user",
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      is_active: user.is_active,
      user_role: user.user_role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Auth user & get token
// @route   POST /api/v1/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (
    user &&
    user.is_active == true &&
    (await bcrypt.compare(password, user.password_hash))
  ) {
    res.json({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      is_active: user.is_active,
      user_role: user.user_role,
      token: generateToken(res, user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get user profile
// @route   GET /api/v1/users/profile
// @access  Private
const userProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password_hash");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { registerUser, authUser, userProfile };
