import mongoose from "mongoose";

const BasicModule_E1_Schema = new mongoose.Schema({
    dates___times: String,
    alarm_date: String,
    alarm_time: String,
    arrival_date_flag: String,
    arrival_date: String,
    arrival_time: String,
    controlled_date_flag: String,
    controlled_date: String,
    controlled_time: String,
    last_unit_cleared_date_flag: String,
    last_unit_cleared_date: String,
    last_unit_cleared_time: String,
});

export default mongoose.model("BasicModule_E1", BasicModule_E1_Schema);
