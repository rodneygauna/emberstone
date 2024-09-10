import mongoose from "mongoose";

const EmergencyMedicalServicesModule_B_Schema = new mongoose.Schema({
    number_of_patients: String,
    patient_number: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_B", EmergencyMedicalServicesModule_B_Schema);
