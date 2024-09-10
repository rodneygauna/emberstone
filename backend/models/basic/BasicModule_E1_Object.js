import {
  requiredDate,
  requiredStringMaxLength,
  requiredYesNo,
  optionalDate,
  optionalStringMaxLength,
} from "../../utils/validation/validationConstants.js";

export const BasicModule_E1_Object = {
  // Date must be formatted as YYYYMMDD
  // Time must be formmateed as HHMMSS and 24-hour clock (000000 - 235959)
  moduleE1_alarm_date: requiredDate("Alarm Date"),
  moduleE1_alarm_time: requiredStringMaxLength("Alarm Time", 6),
  moduleE1_arrival_date_flag: requiredYesNo("Arrival Date Flag"),
  moduleE1_arrival_date: optionalDate(),
  moduleE1_arrival_time: optionalStringMaxLength(6),
  moduleE1_controlled_date_flag: requiredYesNo("Controlled Date Flag"),
  moduleE1_controlled_date: optionalDate(),
  moduleE1_controlled_time: optionalStringMaxLength(6),
  moduleE1_last_unit_cleared_date_flag: requiredYesNo(
    "Last Unit Cleared Date Flag"
  ),
  moduleE1_last_unit_cleared_date: optionalDate(),
  moduleE1_last_unit_cleared_time: optionalStringMaxLength(6),
};
