import mongoose from "mongoose";

const HazardousMaterialsModule_D2_Schema = new mongoose.Schema({
    released_units: String,
});

export default mongoose.model("HazardousMaterialsModule_D2", HazardousMaterialsModule_D2_Schema);
