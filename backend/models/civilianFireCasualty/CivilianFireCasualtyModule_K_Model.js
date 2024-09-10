import mongoose from "mongoose";

const CivilianFireCasualtyModule_K_Schema = new mongoose.Schema({
    factors_contributing_to_injury: String,
    contributing_factors_none_box: String,
    contributing_factors_1: String,
    contributing_factors_2: String,
    contributing_factors_3: String,
});

export default mongoose.model("CivilianFireCasualtyModule_K", CivilianFireCasualtyModule_K_Schema);
