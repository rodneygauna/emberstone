import {
  optionalYesNo,
  optionalNumberMinMax,
} from "../../utils/validation/validationConstants.js";

export const BasicModule_H1_Object = {
  moduleH1_casualties_none_flag: optionalYesNo(),
  moduleH1_fire_service_deaths: optionalNumberMinMax(1, 999),
  moduleH1_fire_service_injuries: optionalNumberMinMax(1, 999),
  moduleH1_other_deaths: optionalNumberMinMax(1, 999),
  moduleH1_other_injuries: optionalNumberMinMax(1, 999),
};
