import mongoose from "mongoose";

import { optionalYesNo } from "../../utils/validation/validationConstants.js";

const BasicModule_H_Schema = new mongoose.Schema({
  system_module_flags__fire: optionalYesNo(),
  system_module_flags__structure: optionalYesNo(),
  system_module_flags__hazmat: optionalYesNo(),
  system_module_flags__wildland: optionalYesNo(),
  system_module_flags__civilian_fire_casualty: optionalYesNo(),
  system_module_flags__fire_service: optionalYesNo(),
  system_module_flags__apparatus: optionalYesNo(),
  system_module_flags__personnel: optionalYesNo(),
  system_module_flags__ems: optionalYesNo(),
  system_module_flags__arson: optionalYesNo(),
});

export default mongoose.model("BasicModule_H", BasicModule_H_Schema);
