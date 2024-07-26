import mongoose from "mongoose";

const BasicModule_K2_Schema = new mongoose.Schema({
    owner: String,
    same_person_involved_flag: String,
    business_name: String,
    telephone_number: String,
    name_prefix: String,
    first_name: String,
    mi: String,
    last_name: String,
    name_suffix: String,
    same_address_as_incident_flag: String,
    number_milepost: String,
    prefix: String,
    street_or_highway: String,
    street_type: String,
    street_suffix: String,
    apt__or_suite: String,
    city: String,
    state: String,
    zip: String,
    p__o__box: String,
});

export default mongoose.model("BasicModule_K2", BasicModule_K2_Schema);
