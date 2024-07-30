import {
  optionalYesNo,
  optionalNumberMinMax,
} from "../../utils/validation/validationConstants.js";

export const BasicModule_G1_Object = {
  moduleG1_resource_form_use_flag: optionalYesNo(),
  moduleG1_suppression_apparatus: optionalNumberMinMax(1, 9999),
  moduleG1_suppression_personnel: optionalNumberMinMax(1, 9999),
  moduleG1_ems_apparatus: optionalNumberMinMax(1, 9999),
  moduleG1_ems_personnel: optionalNumberMinMax(1, 9999),
  moduleG1_other_apparatus: optionalNumberMinMax(1, 9999),
  moduleG1_other_personnel: optionalNumberMinMax(1, 9999),
  moduleG1_resource_count_includes_aid_received_flag: optionalYesNo(),
};
