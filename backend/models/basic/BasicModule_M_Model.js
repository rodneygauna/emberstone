import mongoose from "mongoose";

const BasicModule_M_Schema = new mongoose.Schema({
    authorization: String,
    officer_in_charge_id: String,
    last_name__officer_in_charge: String,
    first_name__officer_in_charge: String,
    middle_initial__officer_in_charge: String,
    position_or_rank__officer_in_charge: String,
    assignment__officer_in_charge: String,
    date__officer_in_charge: String,
    same_as_officer_flag: String,
    member_making_report_id: String,
    last_name__member_making_report: String,
    first_name__member_making_report: String,
    middle_initial__member_making_report: String,
    position_or_rank__member_making_report: String,
    assignment__member_making_report: String,
    date__member_making_report: String,
});

export default mongoose.model("BasicModule_M", BasicModule_M_Schema);
