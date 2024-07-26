import mongoose from "mongoose";

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

const BasicModule_A_Schema = new mongoose.Schema({
  state: requiredEnum("State", stateAbbreviations),
  fdid: requiredStringMaxLength("FDID", 5),
  incident_date: requiredDate("Incident Date"),
  station: optionalStringMaxLength(3),
  incident_number: requiredNumberMinMax("Incident Number", 1, 999999),
  exposure: requiredNumberMinMax("Exposure", 0, 999),
  delete_change_no_activity_this_month: optionalEnum(incidentReportingStatus),
});

export default mongoose.model("BasicModule_A", BasicModule_A_Schema);
