import mongoose from "mongoose";

const EmergencyMedicalServicesModule_I_Schema = new mongoose.Schema({
    procedures_used: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_I", EmergencyMedicalServicesModule_I_Schema);
