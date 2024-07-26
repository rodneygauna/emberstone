import mongoose from "mongoose";

const ArsonModule_K_Schema = new mongoose.Schema({
    initial_observations: String,
});

export default mongoose.model("ArsonModule_K", ArsonModule_K_Schema);
