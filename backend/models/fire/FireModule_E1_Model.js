import mongoose from "mongoose";

const FireModule_E1_Schema = new mongoose.Schema({
    cause_of_ignition: String,
    exposure_report_flag: String,
    cause_of_ignition: String,
});

export default mongoose.model("FireModule_E1", FireModule_E1_Schema);
