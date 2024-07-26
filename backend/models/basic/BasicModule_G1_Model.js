import mongoose from "mongoose";

const BasicModule_G1_Schema = new mongoose.Schema({
    resources: String,
    resource_form_use_flag: String,
    suppression_apparatus: String,
    suppression_personnel: String,
    ems_apparatus: String,
    ems_personnel: String,
    other_apparatus: String,
    other_personnel: String,
    resource_count_includes_aid_received_flag: String,
});

export default mongoose.model("BasicModule_G1", BasicModule_G1_Schema);
