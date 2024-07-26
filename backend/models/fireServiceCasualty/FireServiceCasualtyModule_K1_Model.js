import mongoose from "mongoose";

const FireServiceCasualtyModule_K1_Schema = new mongoose.Schema({
    equipment_involved_in_injury_sequence_number: String,
});

export default mongoose.model("FireServiceCasualtyModule_K1", FireServiceCasualtyModule_K1_Schema);
