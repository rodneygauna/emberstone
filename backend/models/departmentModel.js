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
      required: [true, "Street number or milepost is required"],
      maxLength: 8,
    },
    street_prefix: {
      type: String,
      maxLength: 2,
    },
    street_or_highway_name: {
      type: String,
      required: [true, "Street or Highway name is required"],
      maxLength: 30,
    },
    street_type: {
      type: String,
      required: [true, "Street type is required"],
      maxLength: 4,
    },
    street_suffix: {
      type: String,
      maxLength: 2,
    },
    city: {
      type: String,
      required: [true, "City is required"],
      maxLength: 20,
    },
    state: {
      type: String,
      required: [true, "State is required"],
      maxLength: 2,
    },
    zip: {
      type: String,
      required: [true, "Zip code is required"],
      minLength: 5,
      maxLength: 9,
    },
    county_code: {
      type: String,
      required: [true, "County code is required"],
      maxLength: 3,
    },
    // Department Phone
    phone_number: {
      type: Number,
      required: [true, "Phone number is required."],
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
