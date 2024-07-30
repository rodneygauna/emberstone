import mongoose from "mongoose";
import {
  requiredStringMaxLength,
  optionalStringMaxLength,
  requiredNumberMinMax,
  requiredPhoneNumber,
  optionalPhoneNumber,
  requiredEnum,
} from "../utils/validation/validationConstants.js";
import stateAbbreviations from "../utils/enumValues/stateEnums.js";

const userSchema = new mongoose.Schema(
  {
    // User Name
    prefix_name: optionalStringMaxLength(3),
    first_name: requiredStringMaxLength("First name", 15),
    middle_initial: optionalStringMaxLength(1),
    last_name: requiredStringMaxLength("Last name", 25),
    suffix_name: optionalStringMaxLength(3),
    // User Address
    street_number_or_milepost: requiredStringMaxLength(
      "Street number or Milepost",
      8
    ),
    street_prefix: optionalStringMaxLength(2),
    street_or_highway_name: requiredStringMaxLength(
      "Street or Highway name",
      30
    ),
    street_type: optionalStringMaxLength(4),
    street_suffix: optionalStringMaxLength(2),
    apartment_number: optionalStringMaxLength(15),
    city: requiredStringMaxLength("City", 20),
    state: requiredEnum("State", stateAbbreviations),
    zip: requiredNumberMinMax("Zip code", 10000, 99999),
    // User Phone
    phone_number: requiredPhoneNumber(1000000000, 9999999999),
    fax_number: optionalPhoneNumber(1000000000, 9999999999),
    // Personnel Information
    personnel_number: requiredStringMaxLength("Personnel Number", 9),
    rank: requiredStringMaxLength("Rank", 10),
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
