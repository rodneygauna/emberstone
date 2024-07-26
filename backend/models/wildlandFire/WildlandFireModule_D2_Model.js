import mongoose from "mongoose";

const WildlandFireModule_D2_Schema = new mongoose.Schema({
    human_factors: String,
    human_factors_contributing_none: String,
    human_factor___asleep: String,
    human_factor___impaired_by_alcohol: String,
    human_factor___unattended_person: String,
    human_factor___mentally_disabled: String,
    human_factor___physically_disabled: String,
    human_factor___multiple_persons_: String,
    human_factor___age_was_a_factor: String,
});

export default mongoose.model("WildlandFireModule_D2", WildlandFireModule_D2_Schema);
