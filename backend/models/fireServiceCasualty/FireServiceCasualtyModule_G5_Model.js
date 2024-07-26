import mongoose from "mongoose";

const FireServiceCasualtyModule_G5_Schema = new mongoose.Schema({
    activity_at_time_of_injury: String,
});

export default mongoose.model("FireServiceCasualtyModule_G5", FireServiceCasualtyModule_G5_Schema);
