import mongoose from "mongoose";

const StructureFileModule_L4_Schema = new mongoose.Schema({
    detector_operation: String,
});

export default mongoose.model("StructureFileModule_L4", StructureFileModule_L4_Schema);
