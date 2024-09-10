import mongoose from "mongoose";

const StructureFileModule_M4_Schema = new mongoose.Schema({
    __of_sprinkler_heads_operating: String,
});

export default mongoose.model("StructureFileModule_M4", StructureFileModule_M4_Schema);
