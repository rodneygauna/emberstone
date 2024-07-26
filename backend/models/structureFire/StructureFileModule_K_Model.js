import mongoose from "mongoose";

const StructureFileModule_K_Schema = new mongoose.Schema({
    material_contributing_none_flag: String,
});

export default mongoose.model("StructureFileModule_K", StructureFileModule_K_Schema);
