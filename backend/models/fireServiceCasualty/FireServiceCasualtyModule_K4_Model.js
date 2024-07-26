import mongoose from "mongoose";

const FireServiceCasualtyModule_K4_Schema = new mongoose.Schema({
    equipment__manufacturer: String,
    equipment_model: String,
    equipment_serial_number: String,
});

export default mongoose.model("FireServiceCasualtyModule_K4", FireServiceCasualtyModule_K4_Schema);
