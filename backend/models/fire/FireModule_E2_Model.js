import mongoose from "mongoose";

const FireModule_E2_Schema = new mongoose.Schema({
    factor_contributing_none_flag: String,
    factor_contributing_to_ignition_1: String,
    factor_contributing_to_ignition_2: String,
});

export default mongoose.model("FireModule_E2", FireModule_E2_Schema);
