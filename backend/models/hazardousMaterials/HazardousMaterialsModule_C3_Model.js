import mongoose from "mongoose";

const HazardousMaterialsModule_C3_Schema = new mongoose.Schema({
    capacity_units: String,
});

export default mongoose.model("HazardousMaterialsModule_C3", HazardousMaterialsModule_C3_Schema);
