import {
  optionalStringMaxLength,
  optionalPhoneNumber,
  optionalEnum,
  optionalYesNo,
} from "../../utils/validation/validationConstants.js";

import namePrefixEnums from "../../utils/enumValues/namePrefixEnums.js";
import nameSuffixEnums from "../../utils/enumValues/nameSuffixEnums.js";
import streetPrefixSuffix from "../../utils/enumValues/streetPrefixSuffixEnums.js";
import streetTypeChoices from "../../utils/enumValues/streetTypeEnums.js";
import stateAbbreviations from "../../utils/enumValues/stateEnums.js";

export const BasicModule_K1_Object = {
  moduleK1_business_name: optionalStringMaxLength(25),
  moduleK1_telephone_number: optionalPhoneNumber(),
  moduleK1_name_prefix: optionalEnum(namePrefixEnums),
  moduleK1_first_name: optionalStringMaxLength(15),
  moduleK1_mi: optionalStringMaxLength(1),
  moduleK1_last_name: optionalStringMaxLength(25),
  moduleK1_name_suffix: optionalEnum(nameSuffixEnums),
  moduleK1_same_address_as_incident_flag: optionalYesNo(),
  moduleK1_number_milepost: optionalStringMaxLength(8),
  moduleK1_prefix: optionalEnum(streetPrefixSuffix),
  moduleK1_street_or_highway: optionalStringMaxLength(20),
  moduleK1_street_type: optionalEnum(streetTypeChoices),
  moduleK1_street_suffix: optionalEnum(streetPrefixSuffix),
  moduleK1_apt_or_suite: optionalStringMaxLength(15),
  moduleK1_city: optionalStringMaxLength(20),
  moduleK1_state: optionalEnum(stateAbbreviations),
  moduleK1_zip: optionalStringMaxLength(9),
  moduleK1_po_box: optionalStringMaxLength(10),
  moduleK1_more_people_involved_record_flag: optionalYesNo(),
};
