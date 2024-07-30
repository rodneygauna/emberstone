import mongoose from "mongoose";

import { optionalEnum } from "../../utils/validation/validationConstants.js";

import mixedUsePropertyCodes from "../../utils/enumValues/mixedUsePropertyCodes.js";

const BasicModule_I_Schema = new mongoose.Schema({
  mixed_use: optionalEnum(mixedUsePropertyCodes),
});

export default mongoose.model("BasicModule_I", BasicModule_I_Schema);
