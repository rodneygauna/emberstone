import mongoose from "mongoose";

const ArsonModule_L_Schema = new mongoose.Schema({
    laboratory_used: String,
});

export default mongoose.model("ArsonModule_L", ArsonModule_L_Schema);
