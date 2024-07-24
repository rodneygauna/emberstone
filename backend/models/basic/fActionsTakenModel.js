import mongoose from "mongoose";
import {
  requiredEnum,
  optionalEnum,
} from "../../utils/validation/validationConstants.js";
import actionsTakenCodes from "../../utils/enumValues/actionsTakenCodes.js";

const fActionsTakenSchema = new mongoose.Schema({
  actions_taken_1: requiredEnum("Actions Taken 1", actionsTakenCodes),
  actions_taken_2: optionalEnum(actionsTakenCodes),
  actions_taken_3: optionalEnum(actionsTakenCodes),
});

export default mongoose.model("actionsTaken", fActionsTakenSchema);
