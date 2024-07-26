import mongoose from "mongoose";

import {
  optionalYesNo,
  requiredEnum,
  optionalStringMaxLength,
  optionalEnum,
  requiredStringMaxLength,
} from "../../utils/validation/validationConstants.js";

import locationTypeCodes from "../../utils/enumValues/locationTypeCodes.js";
import streetPrefixSuffix from "../../utils/enumValues/streetPrefixSuffixEnums.js";
import streetTypeChoices from "../../utils/enumValues/streetTypeEnums.js";
import stateAbbreviations from "../../utils/enumValues/stateEnums.js";

const BasicModule_B_Schema = new mongoose.Schema({
  wildland_address_elsewhere_flag: optionalYesNo(),
  location_type: requiredEnum("Location Type", locationTypeCodes),
  census_tract: optionalStringMaxLength(6),
  number_milepost: optionalStringMaxLength(8),
  street_prefix_direction: optionalEnum(streetPrefixSuffix),
  street_or_highway_name: requiredStringMaxLength("Street or Highway Name", 30),
  street_type: requiredEnum("Street Type", streetTypeChoices),
  street_suffix: optionalEnum(streetPrefixSuffix),
  apt_or_suite: optionalStringMaxLength(15),
  city: requiredStringMaxLength("City", 20),
  state: requiredEnum("State", stateAbbreviations),
  zip: requiredStringMaxLength("Zip", 10),
  cross_street__directions_or_national_grid: optionalStringMaxLength(30),
});

export default mongoose.model("BasicModule_B", BasicModule_B_Schema);
