import mongoose from "mongoose";

const StructureFileModule_I4_Schema = new mongoose.Schema({
    size_of_main_floor_area: String,
    sq__feet: String,
    length: String,
    width: String,
});

export default mongoose.model("StructureFileModule_I4", StructureFileModule_I4_Schema);
