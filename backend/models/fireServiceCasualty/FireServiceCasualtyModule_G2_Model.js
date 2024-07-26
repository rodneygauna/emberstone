import mongoose from "mongoose";

const FireServiceCasualtyModule_G2_Schema = new mongoose.Schema({
    physical_condition_just_prior_to_injury: String,
});

export default mongoose.model("FireServiceCasualtyModule_G2", FireServiceCasualtyModule_G2_Schema);
