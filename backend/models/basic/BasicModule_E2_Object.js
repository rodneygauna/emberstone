import { optionalStringMaxLength } from "../../utils/validation/validationConstants.js";

export const BasicModule_E2_Object = {
  moduleE2_shifts_or_platoon: optionalStringMaxLength(1),
  moduleE2_alarms: optionalStringMaxLength(2),
  moduleE2_district: optionalStringMaxLength(3),
};
