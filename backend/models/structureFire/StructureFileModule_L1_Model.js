import mongoose from "mongoose";

const StructureFileModule_L1_Schema = new mongoose.Schema({
    presence_of_detectors: String,
});

export default mongoose.model("StructureFileModule_L1", StructureFileModule_L1_Schema);
