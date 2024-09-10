import mongoose from "mongoose";

const FireServiceCasualtyModule_G3_Schema = new mongoose.Schema({
    severity: String,
});

export default mongoose.model("FireServiceCasualtyModule_G3", FireServiceCasualtyModule_G3_Schema);
