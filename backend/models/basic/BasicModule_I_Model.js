import mongoose from "mongoose";

const BasicModule_I_Schema = new mongoose.Schema({
    mixed_use: String,
});

export default mongoose.model("BasicModule_I", BasicModule_I_Schema);
