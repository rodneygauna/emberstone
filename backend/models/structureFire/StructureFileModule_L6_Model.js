import mongoose from "mongoose";

const StructureFileModule_L6_Schema = new mongoose.Schema({
    detector_failure_reason: String,
});

export default mongoose.model("StructureFileModule_L6", StructureFileModule_L6_Schema);
