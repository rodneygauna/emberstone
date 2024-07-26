import mongoose from "mongoose";

const FireServiceCasualtyModule_K_Schema = new mongoose.Schema({
    did_protective_equip_fail_and_or_cont__to_injury_: String,
});

export default mongoose.model("FireServiceCasualtyModule_K", FireServiceCasualtyModule_K_Schema);
