import mongoose from "mongoose";

const HazardousMaterialsModule_D1_Schema = new mongoose.Schema({
    estimated_amount_release: String,
});

export default mongoose.model("HazardousMaterialsModule_D1", HazardousMaterialsModule_D1_Schema);
