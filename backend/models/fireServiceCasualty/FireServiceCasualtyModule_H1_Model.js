import mongoose from "mongoose";

const FireServiceCasualtyModule_H1_Schema = new mongoose.Schema({
    primary_apparent_symptom: String,
});

export default mongoose.model("FireServiceCasualtyModule_H1", FireServiceCasualtyModule_H1_Schema);
