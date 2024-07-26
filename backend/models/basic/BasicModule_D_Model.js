import mongoose from "mongoose";

import {
  requiredEnum,
  optionalStringMaxLength,
  optionalEnum,
} from "../../utils/validation/validationConstants.js";

import aidGivenCodes from "../../utils/enumValues/aidGivenCodes.js";
import stateAbbreviations from "../../utils/enumValues/stateEnums.js";

const BasicModule_D_Schema = new mongoose.Schema({
  aid_type: requiredEnum("Aid Type", aidGivenCodes),
  fdid_receiving_aid: optionalStringMaxLength(5),
  state: optionalEnum(stateAbbreviations),
  incident_number_of_receiving_aid: optionalStringMaxLength(7),
});

export default mongoose.model("BasicModule_D", BasicModule_D_Schema);
