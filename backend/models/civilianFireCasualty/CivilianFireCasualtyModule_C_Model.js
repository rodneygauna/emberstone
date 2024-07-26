import mongoose from "mongoose";

const CivilianFireCasualtyModule_C_Schema = new mongoose.Schema({
    casualty_number: String,
});

export default mongoose.model("CivilianFireCasualtyModule_C", CivilianFireCasualtyModule_C_Schema);
