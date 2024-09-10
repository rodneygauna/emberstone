import mongoose from "mongoose";

const CivilianFireCasualtyModule_F_Schema = new mongoose.Schema({
    affiliation: String,
});

export default mongoose.model("CivilianFireCasualtyModule_F", CivilianFireCasualtyModule_F_Schema);
