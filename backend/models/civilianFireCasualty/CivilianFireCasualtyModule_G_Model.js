import mongoose from "mongoose";

const CivilianFireCasualtyModule_G_Schema = new mongoose.Schema({
    date_of_injury: String,
    time_of_injury: String,
});

export default mongoose.model("CivilianFireCasualtyModule_G", CivilianFireCasualtyModule_G_Schema);
