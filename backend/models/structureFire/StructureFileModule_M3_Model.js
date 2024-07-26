import mongoose from "mongoose";

const StructureFileModule_M3_Schema = new mongoose.Schema({
    operation_of_automatic_extinguishing_system: String,
});

export default mongoose.model("StructureFileModule_M3", StructureFileModule_M3_Schema);
