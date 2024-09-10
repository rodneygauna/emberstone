import mongoose from "mongoose";

const CivilianFireCasualtyModule_M1_Schema = new mongoose.Schema({
    location_at_time_of_incident: String,
});

export default mongoose.model("CivilianFireCasualtyModule_M1", CivilianFireCasualtyModule_M1_Schema);
