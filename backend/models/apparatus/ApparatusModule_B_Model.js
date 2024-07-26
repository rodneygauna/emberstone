import mongoose from "mongoose";

const ApparatusModule_B_Schema = new mongoose.Schema({
    apparatus_or_resource_record_number: String,
    delete_change: String,
    id_of_apparatus_or_resource: String,
    type_of_apparatus_or_resource: String,
    dispatch_flag: String,
    dispatch_date: String,
    dispatch_time: String,
    clear_flag: String,
    clear_date: String,
    clear_time: String,
    arrive_flag: String,
    arrive_date: String,
    arrive_time: String,
    sent: String,
    number_of_people: String,
    use: String,
    action_1: String,
    action_2: String,
    action_3: String,
    action_4: String,
    last_name: String,
});

export default mongoose.model("ApparatusModule_B", ApparatusModule_B_Schema);
