import mongoose from "mongoose";

const FireServiceCasualtyModule_J1_Schema = new mongoose.Schema({
    where_injury_occurred: String,
});

export default mongoose.model("FireServiceCasualtyModule_J1", FireServiceCasualtyModule_J1_Schema);
