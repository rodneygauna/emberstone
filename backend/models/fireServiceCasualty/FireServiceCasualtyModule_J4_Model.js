import mongoose from "mongoose";

const FireServiceCasualtyModule_J4_Schema = new mongoose.Schema({
    vehicle_type: String,
});

export default mongoose.model("FireServiceCasualtyModule_J4", FireServiceCasualtyModule_J4_Schema);
