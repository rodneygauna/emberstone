import mongoose from "mongoose";

const HazardousMaterialsModule_G2_Schema = new mongoose.Schema({
    area_evacuated: String,
    area_evacuated___none: String,
    area_evacuated_unit: String,
});

export default mongoose.model("HazardousMaterialsModule_G2", HazardousMaterialsModule_G2_Schema);
