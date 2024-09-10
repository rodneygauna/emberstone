import mongoose from "mongoose";

const FireServiceCasualtyModule_J3_Schema = new mongoose.Schema({
    specific_location: String,
});

export default mongoose.model("FireServiceCasualtyModule_J3", FireServiceCasualtyModule_J3_Schema);
