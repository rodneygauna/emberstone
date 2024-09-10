import mongoose from "mongoose";

const FireServiceCasualtyModule_F_Schema = new mongoose.Schema({
    number_of_responses_during_past_24_hours: String,
});

export default mongoose.model("FireServiceCasualtyModule_F", FireServiceCasualtyModule_F_Schema);
