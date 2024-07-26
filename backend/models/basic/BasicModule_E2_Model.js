import mongoose from "mongoose";

import { optionalStringMaxLength } from "../../utils/validation/validationConstants.js";

const BasicModule_E2_Schema = new mongoose.Schema({
  shifts_or_platoon: optionalStringMaxLength(1),
  alarms: optionalStringMaxLength(2),
  district: optionalStringMaxLength(3),
});

export default mongoose.model("BasicModule_E2", BasicModule_E2_Schema);
