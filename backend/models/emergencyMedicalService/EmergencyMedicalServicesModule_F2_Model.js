import mongoose from "mongoose";

const EmergencyMedicalServicesModule_F2_Schema = new mongoose.Schema({
    ethnicity_: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_F2", EmergencyMedicalServicesModule_F2_Schema);
