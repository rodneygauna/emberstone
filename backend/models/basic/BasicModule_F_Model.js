import mongoose from "mongoose";

import {
  requiredEnum,
  optionalEnum,
} from "../../utils/validation/validationConstants.js";

import actionsTakenCodes from "../../utils/enumValues/actionsTakenCodes.js";

const BasicModule_F_Schema = new mongoose.Schema({
  actions_taken__1: requiredEnum("Actions Taken", actionsTakenCodes),
  actions_taken__2: optionalEnum(actionsTakenCodes),
  actions_taken__3: optionalEnum(actionsTakenCodes),
});

export default mongoose.model("BasicModule_F", BasicModule_F_Schema);
