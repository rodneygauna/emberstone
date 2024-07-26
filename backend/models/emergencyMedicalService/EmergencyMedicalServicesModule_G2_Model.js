import mongoose from "mongoose";

const EmergencyMedicalServicesModule_G2_Schema = new mongoose.Schema({
    other_factors: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_G2", EmergencyMedicalServicesModule_G2_Schema);
