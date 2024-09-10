import mongoose from "mongoose";

const HazardousMaterialsModule_B_Schema = new mongoose.Schema({
    hazmat_id: String,
    un_number: String,
    dot_hazard_classification: String,
    cas_registration_number: String,
    name_of_chemical_or_material_code: String,
    chemical_name: String,
    first_name: String,
});

export default mongoose.model("HazardousMaterialsModule_B", HazardousMaterialsModule_B_Schema);
