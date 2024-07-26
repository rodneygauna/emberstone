import mongoose from "mongoose";

const StructureFileModule_M2_Schema = new mongoose.Schema({
    type_of_aes: String,
});

export default mongoose.model("StructureFileModule_M2", StructureFileModule_M2_Schema);
