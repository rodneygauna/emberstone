import mongoose from "mongoose";

const FireServiceCasualtyModule_H2_Schema = new mongoose.Schema({
    primary_injured_body_part: String,
});

export default mongoose.model("FireServiceCasualtyModule_H2", FireServiceCasualtyModule_H2_Schema);
