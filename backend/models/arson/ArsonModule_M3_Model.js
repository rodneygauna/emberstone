import mongoose from "mongoose";

const ArsonModule_M3_Schema = new mongoose.Schema({
    gender: String,
});

export default mongoose.model("ArsonModule_M3", ArsonModule_M3_Schema);
