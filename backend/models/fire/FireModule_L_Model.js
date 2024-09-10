import mongoose from "mongoose";

const FireModule_L_Schema = new mongoose.Schema({
    incident_date: String,
});

export default mongoose.model("FireModule_L", FireModule_L_Schema);
