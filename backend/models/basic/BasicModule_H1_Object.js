import {
  optionalYesNo,
  optionalNumberMinMax,
} from "../../utils/validation/validationConstants.js";

export const BasicModule_H1_Object = {
  casualties_none_flag: optionalYesNo(),
  fire_service_deaths: optionalNumberMinMax(1, 999),
  fire_service_injuries: optionalNumberMinMax(1, 999),
  other_deaths: optionalNumberMinMax(1, 999),
  other_injuries: optionalNumberMinMax(1, 999),
};
