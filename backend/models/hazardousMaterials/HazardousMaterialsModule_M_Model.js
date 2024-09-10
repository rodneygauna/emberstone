import mongoose from "mongoose";

const HazardousMaterialsModule_M_Schema = new mongoose.Schema({
    equipment_involved_in_release: String,
    no_equipment_involved_in_release_flag: String,
    equipment_involved: String,
    brand: String,
    model: String,
    serial__: String,
    year: String,
});

export default mongoose.model("HazardousMaterialsModule_M", HazardousMaterialsModule_M_Schema);
