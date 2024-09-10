import mongoose from "mongoose";

const FireModule_B_Schema = new mongoose.Schema({
    property_detail: String,
});

export default mongoose.model("FireModule_B", FireModule_B_Schema);
