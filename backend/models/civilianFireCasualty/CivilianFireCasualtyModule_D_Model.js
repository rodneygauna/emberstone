import mongoose from "mongoose";

const CivilianFireCasualtyModule_D_Schema = new mongoose.Schema({
    age: String,
    months_for_infants: String,
    date_of_birth: String,
});

export default mongoose.model("CivilianFireCasualtyModule_D", CivilianFireCasualtyModule_D_Schema);
