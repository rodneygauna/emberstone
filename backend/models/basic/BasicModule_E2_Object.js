import { optionalStringMaxLength } from "../../utils/validation/validationConstants.js";

export const BasicModule_E2_Object = {
  shifts_or_platoon: optionalStringMaxLength(1),
  alarms: optionalStringMaxLength(2),
  district: optionalStringMaxLength(3),
};
