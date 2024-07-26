import mongoose from "mongoose";

const EmergencyMedicalServicesModule_K_Schema = new mongoose.Schema({
    cardiac_arrest: String,
    pre_arrival_arrest_details: String,
    initial_arrest_rhythm: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_K", EmergencyMedicalServicesModule_K_Schema);
