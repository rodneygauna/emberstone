import {
  optionalNumberMinMax,
  optionalStringMaxLength,
} from "../../utils/validation/validationConstants.js";

export const BasicModule_E3_Object = {
  special_study_sequence_number__1: optionalNumberMinMax(1, 999),
  special_study_id__1: optionalNumberMinMax(1, 99999),
  special_study_code__1: optionalStringMaxLength(5),
  special_study_sequence_number__2: optionalNumberMinMax(1, 999),
  special_study_id__2: optionalNumberMinMax(1, 99999),
  special_study_code__2: optionalStringMaxLength(5),
};