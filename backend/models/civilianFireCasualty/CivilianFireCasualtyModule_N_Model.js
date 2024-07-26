import mongoose from "mongoose";

const CivilianFireCasualtyModule_N_Schema = new mongoose.Schema({
    primary_apparent_symptom: String,
});

export default mongoose.model("CivilianFireCasualtyModule_N", CivilianFireCasualtyModule_N_Schema);
