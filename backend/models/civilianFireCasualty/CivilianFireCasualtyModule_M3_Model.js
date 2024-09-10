import mongoose from "mongoose";

const CivilianFireCasualtyModule_M3_Schema = new mongoose.Schema({
    story_at_start_of_injury: String,
    story_at_start_of_injury__below_grade_flag: String,
});

export default mongoose.model("CivilianFireCasualtyModule_M3", CivilianFireCasualtyModule_M3_Schema);
