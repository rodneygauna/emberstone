import mongoose from "mongoose";

const CivilianFireCasualtyModule_M4_Schema = new mongoose.Schema({
    story_where_injury_occurred: String,
    story_where_injury_occurred_below_grade_flag: String,
});

export default mongoose.model("CivilianFireCasualtyModule_M4", CivilianFireCasualtyModule_M4_Schema);
