import mongoose from "mongoose";

import {
  optionalNumberMinMax,
  optionalYesNo,
} from "../../utils/validation/validationConstants.js";

const BasicModule_G2_Schema = new mongoose.Schema({
  property_dollar_loss: optionalNumberMinMax(1, 999999999),
  property_loss_none_flag: optionalYesNo(),
  contents_dollar_loss: optionalNumberMinMax(1, 999999999),
  contents_loss_none_flag: optionalYesNo(),
  pre_incident_property_value: optionalNumberMinMax(1, 999999999),
  pre_incident_property_none_flag: optionalYesNo(),
  pre_incident_contents_value: optionalNumberMinMax(1, 999999999),
  pre_incident_contents_none_flag: optionalYesNo(),
});

export default mongoose.model("BasicModule_G2", BasicModule_G2_Schema);
