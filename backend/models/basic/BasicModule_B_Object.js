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

export const BasicModule_B_Object = {
  moduleB_wildland_address_elsewhere_flag: optionalYesNo(),
  moduleB_location_type: requiredEnum("Location Type", locationTypeCodes),
  moduleB_census_tract: optionalStringMaxLength(6),
  moduleB_number_milepost: optionalStringMaxLength(8),
  moduleB_street_prefix_direction: optionalEnum(streetPrefixSuffix),
  moduleB_street_or_highway_name: requiredStringMaxLength(
    "Street or Highway Name",
    30
  ),
  moduleB_street_type: requiredEnum("Street Type", streetTypeChoices),
  moduleB_street_suffix: optionalEnum(streetPrefixSuffix),
  moduleB_apt_or_suite: optionalStringMaxLength(15),
  moduleB_city: requiredStringMaxLength("City", 20),
  moduleB_state: requiredEnum("State", stateAbbreviations),
  moduleB_zip: requiredStringMaxLength("Zip", 10),
  moduleB_cross_street__directions_or_national_grid:
    optionalStringMaxLength(30),
};
