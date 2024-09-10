import mongoose from "mongoose";

const StructureFileModule_J1_Schema = new mongoose.Schema({
    floor_of_origin: String,
    “story_of_origin__below_grade_flag”: String,
});

export default mongoose.model("StructureFileModule_J1", StructureFileModule_J1_Schema);
