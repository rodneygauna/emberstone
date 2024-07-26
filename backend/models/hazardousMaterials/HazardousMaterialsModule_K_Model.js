import mongoose from "mongoose";

const HazardousMaterialsModule_K_Schema = new mongoose.Schema({
    factors_contributing_to_release: String,
    factors__1: String,
    factors__2: String,
    factors__3: String,
});

export default mongoose.model("HazardousMaterialsModule_K", HazardousMaterialsModule_K_Schema);
