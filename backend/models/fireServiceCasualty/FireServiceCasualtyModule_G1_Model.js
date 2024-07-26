import mongoose from "mongoose";

const FireServiceCasualtyModule_G1_Schema = new mongoose.Schema({
    usual_assignment: String,
});

export default mongoose.model("FireServiceCasualtyModule_G1", FireServiceCasualtyModule_G1_Schema);
