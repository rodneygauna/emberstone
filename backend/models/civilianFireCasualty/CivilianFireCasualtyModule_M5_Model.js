import mongoose from "mongoose";

const CivilianFireCasualtyModule_M5_Schema = new mongoose.Schema({
    specific_location_at_time_of_injury: String,
});

export default mongoose.model("CivilianFireCasualtyModule_M5", CivilianFireCasualtyModule_M5_Schema);
