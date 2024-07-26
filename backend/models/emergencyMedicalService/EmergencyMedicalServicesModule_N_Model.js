import mongoose from "mongoose";

const EmergencyMedicalServicesModule_N_Schema = new mongoose.Schema({
    disposition: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_N", EmergencyMedicalServicesModule_N_Schema);
