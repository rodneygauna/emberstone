import mongoose from "mongoose";

const ArsonModule_M7_Schema = new mongoose.Schema({
    motivation__risk_factors: String,
});

export default mongoose.model("ArsonModule_M7", ArsonModule_M7_Schema);
