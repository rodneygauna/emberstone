import mongoose from "mongoose";

const ArsonModule_G1_Schema = new mongoose.Schema({
    entry_method: String,
});

export default mongoose.model("ArsonModule_G1", ArsonModule_G1_Schema);
