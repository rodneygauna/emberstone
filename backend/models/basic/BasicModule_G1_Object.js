import {
  optionalYesNo,
  optionalNumberMinMax,
} from "../../utils/validation/validationConstants.js";

export const BasicModule_G1_Object = {
  resource_form_use_flag: optionalYesNo(),
  suppression_apparatus: optionalNumberMinMax(1, 9999),
  suppression_personnel: optionalNumberMinMax(1, 9999),
  ems_apparatus: optionalNumberMinMax(1, 9999),
  ems_personnel: optionalNumberMinMax(1, 9999),
  other_apparatus: optionalNumberMinMax(1, 9999),
  other_personnel: optionalNumberMinMax(1, 9999),
  resource_count_includes_aid_received_flag: optionalYesNo(),
};
