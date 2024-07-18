import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    // Identifiers
    nfirs_id: {
      type: String,
      required: [true, "NFIRS ID is required"],
      maxLength: 5,
    },
    state_fdid: {
      type: String,
      required: [true, "State Fire Department ID is required"],
      maxLength: 5,
    },
    name: {
      type: String,
      required: [true, "Fire Department name is required"],
    },
    // Department Address
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
    county_code: {
      type: String,
      maxLength: 3,
    },
    // Departmetn Phone
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
    // Department Status
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Department", departmentSchema);
