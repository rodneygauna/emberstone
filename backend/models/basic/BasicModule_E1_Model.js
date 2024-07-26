import mongoose from "mongoose";

import {
  requiredDate,
  requiredStringMaxLength,
  requiredYesNo,
  optionalDate,
  optionalStringMaxLength,
} from "../../utils/validation/validationConstants.js";

const BasicModule_E1_Schema = new mongoose.Schema({
  // Date must be formatted as YYYYMMDD
  // Time must be formmateed as HHMMSS and 24-hour clock (000000 - 235959)
  alarm_date: requiredDate("Alarm Date"),
  alarm_time: requiredStringMaxLength("Alarm Time", 6),
  arrival_date_flag: requiredYesNo("Arrival Date Flag"),
  arrival_date: optionalDate(),
  arrival_time: optionalStringMaxLength(6),
  controlled_date_flag: requiredYesNo("Controlled Date Flag"),
  controlled_date: optionalDate(),
  controlled_time: optionalStringMaxLength(6),
  last_unit_cleared_date_flag: requiredYesNo("Last Unit Cleared Date Flag"),
  last_unit_cleared_date: optionalDate(),
  last_unit_cleared_time: optionalStringMaxLength(6),
});

export default mongoose.model("BasicModule_E1", BasicModule_E1_Schema);
