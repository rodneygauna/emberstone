import {
  optionalStringMaxLength,
  optionalDate,
  optionalYesNo,
} from "../../utils/validation/validationConstants.js";

export const BasicModule_M_Object = {
  officer_in_charge_id: optionalStringMaxLength(9),
  last_name__officer_in_charge: optionalStringMaxLength(25),
  first_name__officer_in_charge: optionalStringMaxLength(15),
  middle_initial__officer_in_charge: optionalStringMaxLength(1),
  position_or_rank__officer_in_charge: optionalStringMaxLength(10),
  assignment__officer_in_charge: optionalStringMaxLength(10),
  date__officer_in_charge: optionalDate(), // Date must be formatted as YYYYMMDD
  same_as_officer_flag: optionalYesNo(),
  member_making_report_id: optionalStringMaxLength(9),
  last_name__member_making_report: optionalStringMaxLength(25),
  first_name__member_making_report: optionalStringMaxLength(15),
  middle_initial__member_making_report: optionalStringMaxLength(1),
  position_or_rank__member_making_report: optionalStringMaxLength(10),
  assignment__member_making_report: optionalStringMaxLength(10),
  date__member_making_report: optionalDate(), // Date must be formatted as YYYYMMDD
};
