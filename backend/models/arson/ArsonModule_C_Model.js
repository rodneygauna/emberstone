import mongoose from "mongoose";

const ArsonModule_C_Schema = new mongoose.Schema({
    case_status: String,
});

export default mongoose.model("ArsonModule_C", ArsonModule_C_Schema);
