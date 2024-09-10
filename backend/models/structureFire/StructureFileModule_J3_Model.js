import mongoose from "mongoose";

const StructureFileModule_J3_Schema = new mongoose.Schema({
    __of_stories_damaged_flame: String,
    minor_damage: String,
    significant_damage: String,
    heavy_damage: String,
    extreme_damage: String,
});

export default mongoose.model("StructureFileModule_J3", StructureFileModule_J3_Schema);
