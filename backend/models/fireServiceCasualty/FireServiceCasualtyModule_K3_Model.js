import mongoose from "mongoose";

const FireServiceCasualtyModule_K3_Schema = new mongoose.Schema({
    equipment_problem: String,
});

export default mongoose.model("FireServiceCasualtyModule_K3", FireServiceCasualtyModule_K3_Schema);
