import mongoose from "mongoose";

const ApparatusModule_A_Schema = new mongoose.Schema({
    state: String,
    fdid: String,
    incident_date: String,
    station: String,
    incident_number: String,
    exposure: String,
});

export default mongoose.model("ApparatusModule_A", ApparatusModule_A_Schema);
