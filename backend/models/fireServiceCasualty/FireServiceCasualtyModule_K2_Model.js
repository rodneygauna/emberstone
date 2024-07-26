import mongoose from "mongoose";

const FireServiceCasualtyModule_K2_Schema = new mongoose.Schema({
    equipment_item: String,
});

export default mongoose.model("FireServiceCasualtyModule_K2", FireServiceCasualtyModule_K2_Schema);
