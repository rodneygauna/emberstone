import mongoose from "mongoose";

import { optionalEnum } from "../../utils/validation/validationConstants.js";

import hazardousMaterialsReleaseCodes from "../../utils/validation/hazardousMaterialsReleaseCodes.js";

const BasicModule_H3_Schema = new mongoose.Schema({
  hazmat_released: optionalEnum(hazardousMaterialsReleaseCodes),
});

export default mongoose.model("BasicModule_H3", BasicModule_H3_Schema);
