import mongoose from "mongoose";

const CivilianFireCasualtyModule_L_Schema = new mongoose.Schema({
    activity_when_injured: String,
});

export default mongoose.model("CivilianFireCasualtyModule_L", CivilianFireCasualtyModule_L_Schema);
