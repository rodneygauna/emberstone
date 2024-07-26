import mongoose from "mongoose";

const StructureFileModule_I3_Schema = new mongoose.Schema({
    building_height: String,
    number_of_stories_at_above_grade: String,
    number_of_stories_below_grade: String,
});

export default mongoose.model("StructureFileModule_I3", StructureFileModule_I3_Schema);
