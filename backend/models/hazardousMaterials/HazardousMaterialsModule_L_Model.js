import mongoose from "mongoose";

const HazardousMaterialsModule_L_Schema = new mongoose.Schema({
    mitigating_factors__1: String,
    mitigating_factors__2: String,
    mitigating_factors__3: String,
});

export default mongoose.model("HazardousMaterialsModule_L", HazardousMaterialsModule_L_Schema);
