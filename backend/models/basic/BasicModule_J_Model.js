import mongoose from "mongoose";

import { requiredEnum } from "../../utils/validation/validationConstants.js";

import propertyUseCodes from "../../utils/validation/propertyUseCodes.js";

const BasicModule_J_Schema = new mongoose.Schema({
  property_use: requiredEnum("Property User", propertyUseCodes),
});

export default mongoose.model("BasicModule_J", BasicModule_J_Schema);
