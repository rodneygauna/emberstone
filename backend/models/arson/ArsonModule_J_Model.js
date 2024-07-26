import mongoose from "mongoose";

const ArsonModule_J_Schema = new mongoose.Schema({
    property_ownership: String,
});

export default mongoose.model("ArsonModule_J", ArsonModule_J_Schema);
