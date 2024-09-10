import mongoose from "mongoose";

const HazardousMaterialsModule_E1_Schema = new mongoose.Schema({
    physical_state_when_released: String,
});

export default mongoose.model("HazardousMaterialsModule_E1", HazardousMaterialsModule_E1_Schema);
