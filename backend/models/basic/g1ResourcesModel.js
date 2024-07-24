import mongoose from "mongoose";
import {
  optionalYesNo,
  optionalNumberMinMax,
} from "../../utils/validation/validationConstants.js";

const g1ResourcesSchema = new mongoose.Schema({
  resource_form_use_flag: optionalYesNo(),
  suppression_apparatus: optionalNumberMinMax(0, 9999),
  suppression_personnel: optionalNumberMinMax(0, 9999),
  ems_apparatus: optionalNumberMinMax(0, 9999),
  ems_personnel: optionalNumberMinMax(0, 9999),
  other_apparatus: optionalNumberMinMax(0, 9999),
  other_personnel: optionalNumberMinMax(0, 9999),
  resource_count_includes_aid_received_flag: optionalYesNo(),
});

export default mongoose.model("Resources", g1ResourcesSchema);
