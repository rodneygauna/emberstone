import mongoose from "mongoose";

const CivilianFireCasualtyModule_P_Schema = new mongoose.Schema({
    disposition: String,
});

export default mongoose.model("CivilianFireCasualtyModule_P", CivilianFireCasualtyModule_P_Schema);
