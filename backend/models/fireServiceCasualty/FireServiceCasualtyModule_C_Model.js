import mongoose from "mongoose";

const FireServiceCasualtyModule_C_Schema = new mongoose.Schema({
    casualty_number: String,
});

export default mongoose.model("FireServiceCasualtyModule_C", FireServiceCasualtyModule_C_Schema);
