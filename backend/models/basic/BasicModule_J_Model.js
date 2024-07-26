import mongoose from "mongoose";

const BasicModule_J_Schema = new mongoose.Schema({
    property_use: String,
});

export default mongoose.model("BasicModule_J", BasicModule_J_Schema);
