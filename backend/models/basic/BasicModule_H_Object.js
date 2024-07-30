import { optionalYesNo } from "../../utils/validation/validationConstants.js";

export const BasicModule_H_Object = {
  moduleH_system_module_flags__fire: optionalYesNo(),
  moduleH_system_module_flags__structure: optionalYesNo(),
  moduleH_system_module_flags__hazmat: optionalYesNo(),
  moduleH_system_module_flags__wildland: optionalYesNo(),
  moduleH_system_module_flags__civilian_fire_casualty: optionalYesNo(),
  moduleH_system_module_flags__fire_service: optionalYesNo(),
  moduleH_system_module_flags__apparatus: optionalYesNo(),
  moduleH_system_module_flags__personnel: optionalYesNo(),
  moduleH_system_module_flags__ems: optionalYesNo(),
  moduleH_system_module_flags__arson: optionalYesNo(),
};
