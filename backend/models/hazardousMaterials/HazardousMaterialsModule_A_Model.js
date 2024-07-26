import mongoose from "mongoose";

const HazardousMaterialsModule_A_Schema = new mongoose.Schema({
    state: String,
    fdid: String,
    incident_date: String,
    station: String,
    incident_number: String,
    exposure: String,
    hazmat__number: String,
    delete_change: String,
});

export default mongoose.model("HazardousMaterialsModule_A", HazardousMaterialsModule_A_Schema);
