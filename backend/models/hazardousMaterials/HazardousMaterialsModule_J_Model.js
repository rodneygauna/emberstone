import mongoose from "mongoose";

const HazardousMaterialsModule_J_Schema = new mongoose.Schema({
    cause_of_release: String,
});

export default mongoose.model("HazardousMaterialsModule_J", HazardousMaterialsModule_J_Schema);
