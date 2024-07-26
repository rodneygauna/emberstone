import mongoose from "mongoose";

const HazardousMaterialsModule_E2_Schema = new mongoose.Schema({
    released_into: String,
});

export default mongoose.model("HazardousMaterialsModule_E2", HazardousMaterialsModule_E2_Schema);
