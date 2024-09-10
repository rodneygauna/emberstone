import mongoose from "mongoose";

const FireServiceCasualtyModule_E_Schema = new mongoose.Schema({
    date_of_injury: String,
    time_of__injury: String,
});

export default mongoose.model("FireServiceCasualtyModule_E", FireServiceCasualtyModule_E_Schema);
