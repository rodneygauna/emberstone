import mongoose from "mongoose";

const HazardousMaterialsModule_C1_Schema = new mongoose.Schema({
    container_type: String,
});

export default mongoose.model("HazardousMaterialsModule_C1", HazardousMaterialsModule_C1_Schema);
