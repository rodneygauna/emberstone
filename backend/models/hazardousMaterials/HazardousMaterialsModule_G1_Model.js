import mongoose from "mongoose";

const HazardousMaterialsModule_G1_Schema = new mongoose.Schema({
    area_affected: String,
    area_affected_unit: String,
});

export default mongoose.model("HazardousMaterialsModule_G1", HazardousMaterialsModule_G1_Schema);
