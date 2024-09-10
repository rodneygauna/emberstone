import {
  optionalStringMaxLength,
  optionalDate,
  optionalYesNo,
} from "../../utils/validation/validationConstants.js";

export const BasicModule_M_Object = {
  moduleM_officer_in_charge_id: optionalStringMaxLength(9),
  moduleM_last_name__officer_in_charge: optionalStringMaxLength(25),
  moduleM_first_name__officer_in_charge: optionalStringMaxLength(15),
  moduleM_middle_initial__officer_in_charge: optionalStringMaxLength(1),
  moduleM_position_or_rank__officer_in_charge: optionalStringMaxLength(10),
  moduleM_assignment__officer_in_charge: optionalStringMaxLength(10),
  moduleM_date__officer_in_charge: optionalDate(), // Date must be formatted as YYYYMMDD
  moduleM_same_as_officer_flag: optionalYesNo(),
  moduleM_member_making_report_id: optionalStringMaxLength(9),
  moduleM_last_name__member_making_report: optionalStringMaxLength(25),
  moduleM_first_name__member_making_report: optionalStringMaxLength(15),
  moduleM_middle_initial__member_making_report: optionalStringMaxLength(1),
  moduleM_position_or_rank__member_making_report: optionalStringMaxLength(10),
  moduleM_assignment__member_making_report: optionalStringMaxLength(10),
  moduleM_date__member_making_report: optionalDate(), // Date must be formatted as YYYYMMDD
};
