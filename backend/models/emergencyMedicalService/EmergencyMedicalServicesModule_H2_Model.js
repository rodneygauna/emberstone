import mongoose from "mongoose";

const EmergencyMedicalServicesModule_H2_Schema = new mongoose.Schema({
    injury_type: String,
    injury_type___1: String,
    injury_type___2: String,
    injury_type___3: String,
    injury_type___4: String,
    injury_type___5: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_H2", EmergencyMedicalServicesModule_H2_Schema);
