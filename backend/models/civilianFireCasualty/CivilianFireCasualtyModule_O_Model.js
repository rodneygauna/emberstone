import mongoose from "mongoose";

const CivilianFireCasualtyModule_O_Schema = new mongoose.Schema({
    primary_part_of_body_injured: String,
});

export default mongoose.model("CivilianFireCasualtyModule_O", CivilianFireCasualtyModule_O_Schema);
