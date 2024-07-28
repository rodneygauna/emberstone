import mongoose from "mongoose";

import { optionalYesNo } from "../../utils/validation/validationConstants.js";

const BasicModule_L2_Schema = new mongoose.Schema({
  fire_form_required_: optionalYesNo(),
});

export default mongoose.model("BasicModule_L2", BasicModule_L2_Schema);
