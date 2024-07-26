import mongoose from "mongoose";

const BasicModule_D_Schema = new mongoose.Schema({
    aid_given___received: String,
    aid_type: String,
    fdid_receiving_aid: String,
    state: String,
    incident_number_of_receiving__aid: String,
});

export default mongoose.model("BasicModule_D", BasicModule_D_Schema);
