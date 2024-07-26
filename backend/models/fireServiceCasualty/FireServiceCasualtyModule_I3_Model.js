import mongoose from "mongoose";

const FireServiceCasualtyModule_I3_Schema = new mongoose.Schema({
    object_involved_in_injury___none: String,
    object_involved_in_injury: String,
});

export default mongoose.model("FireServiceCasualtyModule_I3", FireServiceCasualtyModule_I3_Schema);
