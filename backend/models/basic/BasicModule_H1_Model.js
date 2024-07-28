import mongoose from "mongoose";

import {
  optionalYesNo,
  optionalNumberMinMax,
} from "../../utils/validation/validationConstants.js";

const BasicModule_H1_Schema = new mongoose.Schema({
  casualties_none_flag: optionalYesNo(),
  fire_service_deaths: optionalNumberMinMax(1, 999),
  fire_service_injuries: optionalNumberMinMax(1, 999),
  other_deaths: optionalNumberMinMax(1, 999),
  other_injuries: optionalNumberMinMax(1, 999),
});

export default mongoose.model("BasicModule_H1", BasicModule_H1_Schema);
