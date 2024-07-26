import mongoose from "mongoose";

const BasicModule_L1_Schema = new mongoose.Schema({
    remarks: String,
    more_remarks: String,
});

export default mongoose.model("BasicModule_L1", BasicModule_L1_Schema);
