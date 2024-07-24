import mongoose from "mongoose";
import {
  optionalYesNo,
  optionalStringMaxLength,
  requiredStringMaxLength,
} from "../../utils/validation/validationConstants.js";

const datesTimesSchema = new mongoose.Schema({
  // Dates must be stored as YYYYMMDD
  // Times must be stored as HHMMSS (000000 - 235959)
  // TODO: Look into using the MongoooseJS Date schema type and validate the format
  alarm_date: requiredStringMaxLength("Alarm Date", 8),
  alarm_time: requiredStringMaxLength("Alarm Time", 6),
  arrival_date_flag: optionalYesNo(),
  arrival_date: optionalStringMaxLength(8),
  arrival_time: optionalStringMaxLength(6),
  controlled_date_flag: optionalYesNo(),
  controlled_date: optionalStringMaxLength(8),
  controlled_time: optionalStringMaxLength(6),
  last_unit_clear_date_flag: optionalYesNo(),
  last_unit_clear_date: optionalStringMaxLength(8),
  last_unit_clear_time: optionalStringMaxLength(6),
});

export default mongoose.model("datesTimes", datesTimesSchema);
