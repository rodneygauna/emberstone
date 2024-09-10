import mongoose from "mongoose";

const FireModule_E3_Schema = new mongoose.Schema({
    human_factors: String,
    human_factors_contributing_none: String,
    human_factor___asleep: String,
    human_factor___impaired_by_alcohol: String,
    human_factor___unattended_person: String,
    human_factor___mentally_disabled: String,
    human_factor___physically_disabled: String,
    human_factor___multiple_persons_: String,
    human_factor___estimated_age_related: String,
    estimated_age_of_person_involved: String,
    sex_of_person_involved: String,
});

export default mongoose.model("FireModule_E3", FireModule_E3_Schema);
