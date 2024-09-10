import mongoose from "mongoose";

const StructureFileModule_M5_Schema = new mongoose.Schema({
    reason_for_aes_failure: String,
});

export default mongoose.model("StructureFileModule_M5", StructureFileModule_M5_Schema);
