import mongoose from "mongoose";

const StructureFileModule_M1_Schema = new mongoose.Schema({
    presence_of_aes: String,
});

export default mongoose.model("StructureFileModule_M1", StructureFileModule_M1_Schema);
