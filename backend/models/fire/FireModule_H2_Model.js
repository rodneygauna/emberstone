import mongoose from "mongoose";

const FireModule_H2_Schema = new mongoose.Schema({
    mobile_property_type: String,
    mobile_property_make: String,
    year: String,
    model: String,
    license_plate__: String,
    state: String,
    vin__: String,
});

export default mongoose.model("FireModule_H2", FireModule_H2_Schema);
