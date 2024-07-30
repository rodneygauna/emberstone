import {
  requiredEnum,
  optionalStringMaxLength,
  optionalEnum,
} from "../../utils/validation/validationConstants.js";

import aidGivenCodes from "../../utils/enumValues/aidGivenCodes.js";
import stateAbbreviations from "../../utils/enumValues/stateEnums.js";

export const BasicModule_D_Object = {
  aid_type: requiredEnum("Aid Type", aidGivenCodes),
  fdid_receiving_aid: optionalStringMaxLength(5),
  state: optionalEnum(stateAbbreviations),
  incident_number_of_receiving_aid: optionalStringMaxLength(7),
};
