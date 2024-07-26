import mongoose from "mongoose";

const EmergencyMedicalServicesModule_G1_Schema = new mongoose.Schema({
    human_factors: String,
    human_factors_none: String,
    asleep: String,
    unconscious: String,
    possibly_impaired_by_alcohol: String,
    possibly_impaired_by_drugs: String,
    mentally_disabled: String,
    physically_disabled: String,
    physically_restrained: String,
    unattended_person: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_G1", EmergencyMedicalServicesModule_G1_Schema);
