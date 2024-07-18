import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // User Name
    prefix_name: {
      type: String,
      maxLength: 3,
    },
    first_name: {
      type: String,
      required: [true, "First name is required"],
      maxLength: 15,
    },
    middle_initial: {
      type: String,
      maxLength: 1,
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
      maxLength: 25,
    },
    suffix_name: {
      type: String,
      maxLength: 3,
    },
    // User Address
    street_number_or_milepost: {
      type: String,
      maxLength: 8,
    },
    street_prefix: {
      type: String,
      maxLength: 2,
    },
    street_or_highway_name: {
      type: String,
      maxLength: 30,
    },
    street_type: {
      type: String,
      maxLength: 4,
    },
    street_suffix: {
      type: String,
      maxLength: 2,
    },
    apartment_number: {
      type: String,
      maxLength: 15,
    },
    city: {
      type: String,
      maxLength: 20,
    },
    state: {
      type: String,
      maxLength: 2,
    },
    zip: {
      type: String,
      minLength: 5,
      maxLength: 9,
    },
    crossstreet_directions_nationalgrid: {
      type: String,
      maxLength: 30,
    },
    // User Phone
    phone_number: {
      type: Number,
      min: 1000000000,
      max: 9999999999,
    },
    fax_number: {
      type: Number,
      min: 1000000000,
      max: 9999999999,
    },
    // Personnel Information
    personnel_number: {
      type: String,
      maxLength: 9,
    },
    rank: {
      type: String,
      maxLength: 10,
    },
    // User Email and Password Hash
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
    // User Status
    is_active: {
      type: Boolean,
      default: true,
    },
    // User Role
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
