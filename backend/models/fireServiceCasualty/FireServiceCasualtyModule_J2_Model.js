import mongoose from "mongoose";

const FireServiceCasualtyModule_J2_Schema = new mongoose.Schema({
    below_grade_flag: String,
    stories_or_floor_where_injury_occurred: String,
});

export default mongoose.model("FireServiceCasualtyModule_J2", FireServiceCasualtyModule_J2_Schema);
