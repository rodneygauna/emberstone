import mongoose from "mongoose";

const CivilianFireCasualtyModule_H_Schema = new mongoose.Schema({
    severity: String,
});

export default mongoose.model("CivilianFireCasualtyModule_H", CivilianFireCasualtyModule_H_Schema);
