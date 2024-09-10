import mongoose from "mongoose";

const FireServiceCasualtyModule_D_Schema = new mongoose.Schema({
    age: String,
    date_of_birth: String,
});

export default mongoose.model("FireServiceCasualtyModule_D", FireServiceCasualtyModule_D_Schema);
