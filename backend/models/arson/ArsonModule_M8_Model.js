import mongoose from "mongoose";

const ArsonModule_M8_Schema = new mongoose.Schema({
    disposition: String,
});

export default mongoose.model("ArsonModule_M8", ArsonModule_M8_Schema);
