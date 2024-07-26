import mongoose from "mongoose";

const EmergencyMedicalServicesModule_E1_Schema = new mongoose.Schema({
    age: String,
    months_for_infants: String,
    date_of_birth: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_E1", EmergencyMedicalServicesModule_E1_Schema);
