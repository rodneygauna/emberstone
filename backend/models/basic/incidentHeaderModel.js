import mongoose from "mongoose";
import {
  requiredDate,
  requiredString,
  requiredEnum,
  requireRef,
} from ".../utils/validation/validationConstants.js";
import incidentReportingStatus from ".../utils/enumValues/incidentReportingStatus.js";

const incidentHeaderSchema = new mongoose.Schema({
  incident_date: requiredDate("Incident date"),
  incident_number: requiredString("Incident number", 7),
  exposure_number: requiredString("Exposure number", 3),
  incident_reporting_status: requiredEnum(
    "Incident Reporting Status",
    incidentReportingStatus
  ),
  department_id: requireRef("Department ID", "Department"),
  station_id: requireRef("Station ID", "Station"),
});

export default mongoose.model("IncidentHeader", incidentHeaderSchema);
