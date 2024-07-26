import mongoose from "mongoose";

const HazardousMaterialsModule_G3_Schema = new mongoose.Schema({
    estimated_number_of_people_evacuation: String,
    estimated_number___none: String,
});

export default mongoose.model("HazardousMaterialsModule_G3", HazardousMaterialsModule_G3_Schema);
