import mongoose from "mongoose";

const BasicModule_E2_Schema = new mongoose.Schema({
    shifts_or_platoon: String,
    alarms: String,
    district: String,
});

export default mongoose.model("BasicModule_E2", BasicModule_E2_Schema);
