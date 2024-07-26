import mongoose from "mongoose";

const StructureFileModule_M_Schema = new mongoose.Schema({
    automatic_extinguishment_systems: String,
});

export default mongoose.model("StructureFileModule_M", StructureFileModule_M_Schema);
