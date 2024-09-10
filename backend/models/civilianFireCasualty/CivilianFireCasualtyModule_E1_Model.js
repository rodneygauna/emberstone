import mongoose from "mongoose";

const CivilianFireCasualtyModule_E1_Schema = new mongoose.Schema({
    race: String,
});

export default mongoose.model("CivilianFireCasualtyModule_E1", CivilianFireCasualtyModule_E1_Schema);
