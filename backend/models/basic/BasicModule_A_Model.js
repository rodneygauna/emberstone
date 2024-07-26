import mongoose from "mongoose";

const BasicModule_A_Schema = new mongoose.Schema({
    state: String,
    fdid: String,
    incident_date: String,
    station: String,
    incident_number: String,
    exposure: String,
    delete_change_no_activity_this_month: String,
});

export default mongoose.model("BasicModule_A", BasicModule_A_Schema);
