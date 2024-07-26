import mongoose from "mongoose";

const FireServiceCasualtyModule_I2_Schema = new mongoose.Schema({
    contributing_factor: String,
});

export default mongoose.model("FireServiceCasualtyModule_I2", FireServiceCasualtyModule_I2_Schema);
