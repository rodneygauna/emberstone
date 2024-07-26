import mongoose from "mongoose";

const EmergencyMedicalServicesModule_M_Schema = new mongoose.Schema({
    patient_status: String,
    pulse_on_transfer: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_M", EmergencyMedicalServicesModule_M_Schema);
