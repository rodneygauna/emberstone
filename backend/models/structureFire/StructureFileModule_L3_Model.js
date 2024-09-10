import mongoose from "mongoose";

const StructureFileModule_L3_Schema = new mongoose.Schema({
    detector_power_supply: String,
});

export default mongoose.model("StructureFileModule_L3", StructureFileModule_L3_Schema);
