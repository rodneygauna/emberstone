import mongoose from "mongoose";

const EmergencyMedicalServicesModule_A_Schema = new mongoose.Schema({
    state: String,
    fdid: String,
    incident_date: String,
    station: String,
    incident_number: String,
    exposure: String,
    delete_change: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_A", EmergencyMedicalServicesModule_A_Schema);
