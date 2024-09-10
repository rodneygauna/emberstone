import mongoose from "mongoose";

const HazardousMaterialsModule_F1_Schema = new mongoose.Schema({
    released_from: String,
    story_of_release: String,
});

export default mongoose.model("HazardousMaterialsModule_F1", HazardousMaterialsModule_F1_Schema);
