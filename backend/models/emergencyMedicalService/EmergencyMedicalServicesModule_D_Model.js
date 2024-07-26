import mongoose from "mongoose";

const EmergencyMedicalServicesModule_D_Schema = new mongoose.Schema({
    provider_impression_assessment: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_D", EmergencyMedicalServicesModule_D_Schema);
