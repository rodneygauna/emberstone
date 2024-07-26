import mongoose from "mongoose";

const CivilianFireCasualtyModule_J_Schema = new mongoose.Schema({
    human_factors_contributing: String,
    human_factors_none: String,
    asleep: String,
    unconscious: String,
    possible_alcohol_involved: String,
    possible_drugs_involved: String,
    mentally_challenged: String,
    physically_challenged: String,
    physically_restrained: String,
    unattended_person: String,
});

export default mongoose.model("CivilianFireCasualtyModule_J", CivilianFireCasualtyModule_J_Schema);
