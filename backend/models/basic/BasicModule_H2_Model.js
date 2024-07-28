import mongoose from "mongoose";

import { optionalEnum } from "../../utils/validation/validationConstants.js";

import incidentTypeCodes from "../../utils/validation/incidentTypeCodes.js";

const BasicModule_H2_Schema = new mongoose.Schema({
  detector_alerted_occupants: optionalEnum(incidentTypeCodes),
});

export default mongoose.model("BasicModule_H2", BasicModule_H2_Schema);
