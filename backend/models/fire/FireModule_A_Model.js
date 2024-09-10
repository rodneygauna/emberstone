import mongoose from "mongoose";

const FireModule_A_Schema = new mongoose.Schema({
    state: String,
    fdid: String,
    station: String,
    incident_number: String,
    exposure: String,
    delete_change: String,
});

export default mongoose.model("FireModule_A", FireModule_A_Schema);
