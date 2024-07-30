import {
  optionalNumberMinMax,
  optionalStringMaxLength,
} from "../../utils/validation/validationConstants.js";

export const BasicModule_E3_Object = {
  moduleE3_special_study_sequence_number__1: optionalNumberMinMax(1, 999),
  moduleE3_special_study_id__1: optionalNumberMinMax(1, 99999),
  moduleE3_special_study_code__1: optionalStringMaxLength(5),
  moduleE3_special_study_sequence_number__2: optionalNumberMinMax(1, 999),
  moduleE3_special_study_id__2: optionalNumberMinMax(1, 99999),
  moduleE3_special_study_code__2: optionalStringMaxLength(5),
};
