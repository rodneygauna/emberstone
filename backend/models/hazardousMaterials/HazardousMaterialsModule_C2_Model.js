import mongoose from "mongoose";

const HazardousMaterialsModule_C2_Schema = new mongoose.Schema({
    estimated_container_capacity: String,
});

export default mongoose.model("HazardousMaterialsModule_C2", HazardousMaterialsModule_C2_Schema);
