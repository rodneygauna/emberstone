import mongoose from "mongoose";

const FireModule_D2_Schema = new mongoose.Schema({
    heat_source: String,
});

export default mongoose.model("FireModule_D2", FireModule_D2_Schema);
