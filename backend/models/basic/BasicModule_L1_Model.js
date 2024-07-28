import mongoose from "mongoose";

import { optionalStringMaxLength } from "../../utils/validation/validationConstants.js";

const BasicModule_L1_Schema = new mongoose.Schema({
  remarks: optionalStringMaxLength(255),
});

export default mongoose.model("BasicModule_L1", BasicModule_L1_Schema);
