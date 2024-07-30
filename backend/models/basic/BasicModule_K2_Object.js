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

export const BasicModule_K2_Object = {
  moduleK2_same_person_involved_flag: optionalYesNo(),
  moduleK2_business_name: optionalStringMaxLength(25),
  moduleK2_telephone_number: optionalPhoneNumber(),
  moduleK2_name_prefix: optionalEnum(namePrefixEnums),
  moduleK2_first_name: optionalStringMaxLength(15),
  moduleK2_mi: optionalStringMaxLength(1),
  moduleK2_last_name: optionalStringMaxLength(25),
  moduleK2_name_suffix: optionalEnum(nameSuffixEnums),
  moduleK2_same_address_as_incident_flag: optionalYesNo(),
  moduleK2_number_milepost: optionalStringMaxLength(8),
  moduleK2_prefix: optionalEnum(streetPrefixSuffix),
  moduleK2_street_or_highway: optionalStringMaxLength(20),
  moduleK2_street_type: optionalEnum(streetTypeChoices),
  moduleK2_street_suffix: optionalEnum(streetPrefixSuffix),
  moduleK2_apt_or_suite: optionalStringMaxLength(15),
  moduleK2_city: optionalStringMaxLength(20),
  moduleK2_state: optionalEnum(stateAbbreviations),
  moduleK2_zip: optionalStringMaxLength(9),
  moduleK2_po_box: optionalStringMaxLength(10),
};
