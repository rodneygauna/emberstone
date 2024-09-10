import mongoose from "mongoose";

const EmergencyMedicalServicesModule_C_Schema = new mongoose.Schema({
    arrived_at_patient_date: String,
    arrived_at_patient_time: String,
    patient_transfer_date: String,
    patient_transfer_time: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_C", EmergencyMedicalServicesModule_C_Schema);
