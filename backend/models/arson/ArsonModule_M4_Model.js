import mongoose from "mongoose";

const ArsonModule_M4_Schema = new mongoose.Schema({
    race: String,
});

export default mongoose.model("ArsonModule_M4", ArsonModule_M4_Schema);
