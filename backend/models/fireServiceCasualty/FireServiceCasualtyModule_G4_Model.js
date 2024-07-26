import mongoose from "mongoose";

const FireServiceCasualtyModule_G4_Schema = new mongoose.Schema({
    taken_to: String,
});

export default mongoose.model("FireServiceCasualtyModule_G4", FireServiceCasualtyModule_G4_Schema);
