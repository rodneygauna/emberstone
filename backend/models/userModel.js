import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
  firstname: {
    type: String,
    required: [true, "First name is required"]
  },
  lastname: {
    type: String,
    required: [true, "Last name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email must be unique"]
  },
  password_hash: {
    type: String,
    required: [true, "Password is required"]
  }
},
  {
    timestamps: true,
  })

export default mongoose.model("User", userSchema);
