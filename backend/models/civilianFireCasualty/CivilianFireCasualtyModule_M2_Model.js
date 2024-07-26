import mongoose from "mongoose";

const CivilianFireCasualtyModule_M2_Schema = new mongoose.Schema({
    general_location_at_time_of_injury: String,
});

export default mongoose.model("CivilianFireCasualtyModule_M2", CivilianFireCasualtyModule_M2_Schema);
