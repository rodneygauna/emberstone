import mongoose from "mongoose";

import { requiredEnum } from "../../utils/validation/validationConstants.js";

import incidentTypeCodes from "../../utils/enumValues/incidentTypeCodes.js";

const BasicModule_C_Schema = new mongoose.Schema({
  incident_type: requiredEnum("Incident Type", incidentTypeCodes),
});

export default mongoose.model("BasicModule_C", BasicModule_C_Schema);
