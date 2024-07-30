import {
  requiredEnum,
  requiredStringMaxLength,
  requiredDate,
  optionalStringMaxLength,
  requiredNumberMinMax,
  optionalEnum,
} from "../../utils/validation/validationConstants.js";

import stateAbbreviations from "../../utils/enumValues/stateEnums.js";
import incidentReportingStatus from "../../utils/enumValues/incidentReportingStatus.js";

export const BasicModule_A_Object = {
  moduleA_state: requiredEnum("State", stateAbbreviations),
  moduleA_fdid: requiredStringMaxLength("FDID", 5),
  moduleA_incident_date: requiredDate("Incident Date"),
  moduleA_station: optionalStringMaxLength(3),
  moduleA_incident_number: requiredNumberMinMax("Incident Number", 1, 999999),
  moduleA_exposure: requiredNumberMinMax("Exposure", 0, 999),
  moduleA_delete_change_no_activity_this_month: optionalEnum(
    incidentReportingStatus
  ),
};
