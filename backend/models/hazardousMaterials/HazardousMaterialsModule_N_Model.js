import mongoose from "mongoose";

const HazardousMaterialsModule_N_Schema = new mongoose.Schema({
    mobile_property_none_flag: String,
    mobile_property_involved: String,
    make: String,
    year: String,
    model: String,
    license_plate__: String,
    state: String,
    dot_number___icc_number_vin__: String,
});

export default mongoose.model("HazardousMaterialsModule_N", HazardousMaterialsModule_N_Schema);
