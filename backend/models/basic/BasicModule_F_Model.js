import mongoose from "mongoose";

const BasicModule_F_Schema = new mongoose.Schema({
    actions_taken__1: String,
    actions_taken__2: String,
    actions_taken__3: String,
});

export default mongoose.model("BasicModule_F", BasicModule_F_Schema);
