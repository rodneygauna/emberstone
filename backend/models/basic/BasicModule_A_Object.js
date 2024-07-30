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
  state: requiredEnum("State", stateAbbreviations),
  fdid: requiredStringMaxLength("FDID", 5),
  incident_date: requiredDate("Incident Date"),
  station: optionalStringMaxLength(3),
  incident_number: requiredNumberMinMax("Incident Number", 1, 999999),
  exposure: requiredNumberMinMax("Exposure", 0, 999),
  delete_change_no_activity_this_month: optionalEnum(incidentReportingStatus),
};
