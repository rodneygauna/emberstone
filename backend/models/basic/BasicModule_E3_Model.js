import mongoose from "mongoose";

const BasicModule_E3_Schema = new mongoose.Schema({
    special_study_sequence_number__1: String,
    special_study_id__1: String,
    special_study_code__1: String,
    special_study_sequence_number__2: String,
    special_study_id__2: String,
    special_study_code__2: String,
});

export default mongoose.model("BasicModule_E3", BasicModule_E3_Schema);
