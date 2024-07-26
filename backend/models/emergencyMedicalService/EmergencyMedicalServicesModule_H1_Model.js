import mongoose from "mongoose";

const EmergencyMedicalServicesModule_H1_Schema = new mongoose.Schema({
    body_site_of_injury: String,
    body_site___1: String,
    body_site___2: String,
    body_site___3: String,
    body_site___4: String,
    body_site___5: String,
});

export default mongoose.model("EmergencyMedicalServicesModule_H1", EmergencyMedicalServicesModule_H1_Schema);
