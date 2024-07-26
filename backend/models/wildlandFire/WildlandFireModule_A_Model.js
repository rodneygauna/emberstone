import mongoose from "mongoose";

const WildlandFireModule_A_Schema = new mongoose.Schema({
    state: String,
    fdid: String,
    incident_date: String,
    station: String,
    incident_number: String,
    exposure: String,
    delete_change: String,
});

export default mongoose.model("WildlandFireModule_A", WildlandFireModule_A_Schema);
