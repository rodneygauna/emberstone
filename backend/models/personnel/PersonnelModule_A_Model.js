import mongoose from "mongoose";

const PersonnelModule_A_Schema = new mongoose.Schema({
    state: String,
    fdid: String,
    incident_date: String,
    station: String,
    incident_number: String,
    exposure: String,
});

export default mongoose.model("PersonnelModule_A", PersonnelModule_A_Schema);
