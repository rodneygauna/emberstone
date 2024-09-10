import mongoose from "mongoose";

const EmergencyMedicalServicesModule_L2_Schema = new mongoose.Schema({
    highest_level_of_provider_at_scene: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_L2", EmergencyMedicalServicesModule_L2_Schema);
