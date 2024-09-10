import mongoose from "mongoose";

const EmergencyMedicalServicesModule_H3_Schema = new mongoose.Schema({
    cause_of_illness_injury: String,
    cause_of_illness_injury___1: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_H3", EmergencyMedicalServicesModule_H3_Schema);
