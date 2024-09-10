import mongoose from "mongoose";

const ArsonModule_M6_Schema = new mongoose.Schema({
    family_type: String,
});

export default mongoose.model("ArsonModule_M6", ArsonModule_M6_Schema);
