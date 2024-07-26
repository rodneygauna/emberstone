import mongoose from "mongoose";

const StructureFileModule_L2_Schema = new mongoose.Schema({
    type_of_detection_system: String,
});

export default mongoose.model("StructureFileModule_L2", StructureFileModule_L2_Schema);
