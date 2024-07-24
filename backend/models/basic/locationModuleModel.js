import mongoose from "mongoose";
import {
  requiredYesNo,
  requiredEnum,
  optionalStringMaxLength,
  requiredStringMaxLength,
} from ".../utils/validation/validationConstants.js";
import locationTypeCodes from "../utils/enumValues/locationTypeCodes.js"
import stateAbbreviations from "../utils/enumValues/stateEnums.js";

const locationModuleSchema = new mongoose.Schema({
  wildland_address_elsewhere_flag: requiredYesNo("Wildland Address Elsewhere Flag"),
  location_type: requiredEnum("Location Type", locationTypeCodes),
  census_track: optionalStringMaxLength(6),
  street_number_or_milepost: optionalStringMaxLength(8),
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
  county_code: requiredStringMaxLength("County code", 3),
  crossstreet_directions_nationalgrid: optionalStringMaxLength(30),
});

export default mongoose.model("locationModule", locationModuleSchema);
