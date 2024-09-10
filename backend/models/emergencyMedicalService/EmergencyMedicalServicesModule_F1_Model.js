import mongoose from "mongoose";

const EmergencyMedicalServicesModule_F1_Schema = new mongoose.Schema({
    race: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_F1", EmergencyMedicalServicesModule_F1_Schema);
