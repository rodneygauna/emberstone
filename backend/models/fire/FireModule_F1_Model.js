import mongoose from "mongoose";

const FireModule_F1_Schema = new mongoose.Schema({
    equipment_involved__in_ignition_flag: String,
    equipment_involved: String,
    brand: String,
    model: String,
    serial__: String,
    year: String,
});

export default mongoose.model("FireModule_F1", FireModule_F1_Schema);
