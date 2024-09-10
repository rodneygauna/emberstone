import mongoose from "mongoose";

const FireModule_F2_Schema = new mongoose.Schema({
    equipment_power_source: String,
});

export default mongoose.model("FireModule_F2", FireModule_F2_Schema);
