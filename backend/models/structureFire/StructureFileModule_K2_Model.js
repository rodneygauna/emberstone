import mongoose from "mongoose";

const StructureFileModule_K2_Schema = new mongoose.Schema({
    type_of_material_contributing_most_to_spread: String,
});

export default mongoose.model("StructureFileModule_K2", StructureFileModule_K2_Schema);
