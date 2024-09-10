import mongoose from "mongoose";

const HazardousMaterialsModule_G4_Schema = new mongoose.Schema({
    estimated_number_of_building_evacuated: String,
    estimated_number_of_bldg____none: String,
});

export default mongoose.model("HazardousMaterialsModule_G4", HazardousMaterialsModule_G4_Schema);
