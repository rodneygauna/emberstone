import mongoose from "mongoose";

const ArsonModule_M5_Schema = new mongoose.Schema({
    ethnicity: String,
});

export default mongoose.model("ArsonModule_M5", ArsonModule_M5_Schema);
