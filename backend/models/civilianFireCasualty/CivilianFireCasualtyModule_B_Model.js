import mongoose from "mongoose";

const CivilianFireCasualtyModule_B_Schema = new mongoose.Schema({
    injured_person: String,
    gender: String,
    first_name: String,
    middle_initial: String,
    last_name: String,
    name_suffix: String,
});

export default mongoose.model("CivilianFireCasualtyModule_B", CivilianFireCasualtyModule_B_Schema);
