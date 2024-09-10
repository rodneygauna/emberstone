import mongoose from "mongoose";

const FireModule_G_Schema = new mongoose.Schema({
    suppression_flag_factors: String,
    suppression_none_flag: String,
    factor__1: String,
    factor__2: String,
    factor__3: String,
});

export default mongoose.model("FireModule_G", FireModule_G_Schema);
