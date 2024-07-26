import mongoose from "mongoose";

const FireModule_B1_Schema = new mongoose.Schema({
    not_residential_flag: String,
    number_of_residential_units: String,
});

export default mongoose.model("FireModule_B1", FireModule_B1_Schema);
