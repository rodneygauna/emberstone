import mongoose from "mongoose";

const StructureFileModule_K1_Schema = new mongoose.Schema({
    item_contributing_most_to_spread: String,
});

export default mongoose.model("StructureFileModule_K1", StructureFileModule_K1_Schema);
