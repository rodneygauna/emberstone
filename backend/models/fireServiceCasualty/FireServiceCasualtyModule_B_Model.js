import mongoose from "mongoose";

const FireServiceCasualtyModule_B_Schema = new mongoose.Schema({
    identification_number: String,
    gender: String,
    career_volunteer: String,
    first_name: String,
    middle_initial: String,
    last_name: String,
    name_suffix: String,
});

export default mongoose.model("FireServiceCasualtyModule_B", FireServiceCasualtyModule_B_Schema);
