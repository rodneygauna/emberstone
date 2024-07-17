import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password_hash: {
      type: String,
      required: [true, "Password is required"],
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    user_role: {
      type: String,
      enum: {
        values: ["user", "super user", "admin"],
        message:
          "{VALUE} is not supported; only user, super user, or admin are allowed.",
      },
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
