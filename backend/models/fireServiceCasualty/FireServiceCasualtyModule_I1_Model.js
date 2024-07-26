import mongoose from "mongoose";

const FireServiceCasualtyModule_I1_Schema = new mongoose.Schema({
    cause_of__firefighter_injury: String,
});

export default mongoose.model("FireServiceCasualtyModule_I1", FireServiceCasualtyModule_I1_Schema);
