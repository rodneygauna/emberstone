import mongoose from "mongoose";

const ArsonModule_M1_Schema = new mongoose.Schema({
    subject_number: String,
});

export default mongoose.model("ArsonModule_M1", ArsonModule_M1_Schema);
