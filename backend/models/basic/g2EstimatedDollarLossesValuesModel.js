import mongoose from "mongoose";
import {
  optionalNumberMinMax,
  optionalYesNo,
} from "../../utils/validation/validationConstants.js";

const g2EstimatedDollarLossesValuesSchema = new mongoose.Schema({
  property_dollar_loss: optionalNumberMinMax(0, 999999999),
  property_loss_none_flag: optionalYesNo(),
  contents_dollar_loss: optionalNumberMinMax(0, 999999999),
  contents_loss_none_flag: optionalYesNo(),
  preincident_property_value: optionalNumberMinMax(0, 999999999),
  preincident_property_none_flag: optionalYesNo(),
  preincident_contents_value: optionalNumberMinMax(0, 999999999),
  preincident_contents_none_flag: optionalYesNo(),
});

export default mongoose.model(
  "EstimatedDollarLossesValues",
  g2EstimatedDollarLossesValuesSchema
);
