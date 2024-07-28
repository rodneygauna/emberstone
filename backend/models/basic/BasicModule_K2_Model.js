import mongoose from "mongoose";

import {
  optionalStringMaxLength,
  optionalPhoneNumber,
  optionalEnum,
  optionalYesNo,
} from "../../utils/validation/validationConstants.js";

import namePrefixEnums from "../../utils/validation/namePrefixEnums.js";
import nameSuffixEnums from "../../utils/validation/nameSuffixEnums.js";
import streetPrefixSuffix from "../../utils/validation/streetPrefixSuffixEnums.js";
import streetTypeChoices from "../../utils/validation/streetTypeEnums.js";
import stateAbbreviations from "../../utils/validation/stateEnums.js";

const BasicModule_K2_Schema = new mongoose.Schema({
  same_person_involved_flag: optionalYesNo(),
  business_name: optionalStringMaxLength(25),
  telephone_number: optionalPhoneNumber(),
  name_prefix: optionalEnum(namePrefixEnums),
  first_name: optionalStringMaxLength(15),
  mi: optionalStringMaxLength(1),
  last_name: optionalStringMaxLength(25),
  name_suffix: optionalEnum(nameSuffixEnums),
  same_address_as_incident_flag: optionalYesNo(),
  number_milepost: optionalStringMaxLength(8),
  prefix: optionalEnum(streetPrefixSuffix),
  street_or_highway: optionalStringMaxLength(20),
  street_type: optionalEnum(streetTypeChoices),
  street_suffix: optionalEnum(streetPrefixSuffix),
  apt_or_suite: optionalStringMaxLength(15),
  city: optionalStringMaxLength(20),
  state: optionalEnum(stateAbbreviations),
  zip: optionalStringMaxLength(9),
  po_box: optionalStringMaxLength(10),
});

export default mongoose.model("BasicModule_K2", BasicModule_K2_Schema);
