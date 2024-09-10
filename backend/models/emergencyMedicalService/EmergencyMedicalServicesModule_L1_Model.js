import mongoose from "mongoose";

const EmergencyMedicalServicesModule_L1_Schema = new mongoose.Schema({
    initial_level_of_provider: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_L1", EmergencyMedicalServicesModule_L1_Schema);
