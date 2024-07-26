import mongoose from "mongoose";

const BasicModule_C_Schema = new mongoose.Schema({
    incident_type: String,
});

export default mongoose.model("BasicModule_C", BasicModule_C_Schema);
