import mongoose from "mongoose";

const ArsonModule_E_Schema = new mongoose.Schema({
    suspected_motivation_factors: String,
});

export default mongoose.model("ArsonModule_E", ArsonModule_E_Schema);
