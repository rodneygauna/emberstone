import mongoose from "mongoose";

const StructureFileModule_L5_Schema = new mongoose.Schema({
    detector_effectiveness: String,
});

export default mongoose.model("StructureFileModule_L5", StructureFileModule_L5_Schema);
