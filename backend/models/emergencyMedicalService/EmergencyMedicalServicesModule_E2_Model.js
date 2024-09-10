import mongoose from "mongoose";

const EmergencyMedicalServicesModule_E2_Schema = new mongoose.Schema({
    gender: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_E2", EmergencyMedicalServicesModule_E2_Schema);
