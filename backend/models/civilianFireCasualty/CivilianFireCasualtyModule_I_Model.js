import mongoose from "mongoose";

const CivilianFireCasualtyModule_I_Schema = new mongoose.Schema({
    cause_of_injury: String,
});

export default mongoose.model("CivilianFireCasualtyModule_I", CivilianFireCasualtyModule_I_Schema);
