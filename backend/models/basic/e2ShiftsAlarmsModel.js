import mongoose from "mongoose";
import { optionalStringMaxLength } from "../../utils/validation/validationConstants.js";

const shiftsAlarmsSchema = new mongoose.Schema({
  shift_or_platoon: optionalStringMaxLength(2),
  alarms: optionalStringMaxLength(2),
  district: optionalStringMaxLength(3),
});

export default mongoose.model("shiftsAlarms", shiftsAlarmsSchema);
