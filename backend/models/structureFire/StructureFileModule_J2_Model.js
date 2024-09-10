import mongoose from "mongoose";

const StructureFileModule_J2_Schema = new mongoose.Schema({
    fire_spread: String,
});

export default mongoose.model("StructureFileModule_J2", StructureFileModule_J2_Schema);
