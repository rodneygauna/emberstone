import mongoose from "mongoose";

const StructureFileModule_I1_Schema = new mongoose.Schema({
    structure_type: String,
});

export default mongoose.model("StructureFileModule_I1", StructureFileModule_I1_Schema);
