import {
  optionalNumberMinMax,
  optionalYesNo,
} from "../../utils/validation/validationConstants.js";

export const BasicModule_G2_Object = {
  moduleG2_property_dollar_loss: optionalNumberMinMax(1, 999999999),
  moduleG2_property_dollar_loss: optionalNumberMinMax(1, 999999999),
  moduleG2_property_loss_none_flag: optionalYesNo(),
  moduleG2_contents_dollar_loss: optionalNumberMinMax(1, 999999999),
  moduleG2_contents_loss_none_flag: optionalYesNo(),
  moduleG2_pre_incident_property_value: optionalNumberMinMax(1, 999999999),
  moduleG2_pre_incident_property_none_flag: optionalYesNo(),
  moduleG2_pre_incident_contents_value: optionalNumberMinMax(1, 999999999),
  moduleG2_pre_incident_contents_none_flag: optionalYesNo(),
};
