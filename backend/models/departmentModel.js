import mongoose from "mongoose";
import {
  requiredString,
  requiredStringMaxLength,
  optionalStringMaxLength,
  requiredNumberMinMax,
  requiredPhoneNumber,
  optionalPhoneNumber,
} from "../utils/validation/validationConstants.js";
import stateAbbreviations from "../utils/enumValues/stateEnums.js";

const departmentSchema = new mongoose.Schema(
  {
    // Department Identifiers
    nfirs_id: requiredStringMaxLength("NFIRS ID", 5),
    state_fdid: requiredStringMaxLength("State Fire Department Number", 5),
    name: requiredString("Fire Department name"),
    // Department Address
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
    city: requiredStringMaxLength("City", 20),
    state: requiredEnum("State", stateAbbreviations),
    zip: requiredNumberMinMax("Zip code", 10000, 99999),
    county_code: requiredStringMaxLength("County code", 3),
    // Department Phone
    phone_number: requiredPhoneNumber(1000000000, 9999999999),
    fax_number: optionalPhoneNumber(1000000000, 9999999999),
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
