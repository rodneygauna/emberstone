import mongoose from "mongoose";

const EmergencyMedicalServicesModule_J_Schema = new mongoose.Schema({
    safety_equipment: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_J", EmergencyMedicalServicesModule_J_Schema);
