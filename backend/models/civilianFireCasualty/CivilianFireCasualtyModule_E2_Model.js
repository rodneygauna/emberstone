import mongoose from "mongoose";

const CivilianFireCasualtyModule_E2_Schema = new mongoose.Schema({
    ethnicity__hispanic: String,
});

export default mongoose.model("CivilianFireCasualtyModule_E2", CivilianFireCasualtyModule_E2_Schema);
